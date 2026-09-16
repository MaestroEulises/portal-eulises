$ErrorActionPreference = 'Stop'

$backendRoot = Split-Path -Parent $PSScriptRoot
$jdkRoot = Join-Path $backendRoot '.jdk'
$homeFile = Join-Path $jdkRoot 'home.txt'

function Get-JavaMajor {
    param([string]$JavaExe)
    try {
        $output = & $JavaExe -version 2>&1 | Out-String
        if ($output -match 'version "(\d+)') {
            return [int]$Matches[1]
        }
    } catch {
        return 0
    }
    return 0
}

function Save-JavaHome {
    param([string]$Path)
    New-Item -ItemType Directory -Force -Path $jdkRoot | Out-Null
    Set-Content -Path $homeFile -Value $Path -NoNewline
    $env:JAVA_HOME = $Path
    Write-Host "JAVA_HOME=$Path"
}

if ($env:JAVA_HOME -and (Test-Path (Join-Path $env:JAVA_HOME 'bin\java.exe'))) {
    $major = Get-JavaMajor (Join-Path $env:JAVA_HOME 'bin\java.exe')
    if ($major -ge 17) {
        Save-JavaHome $env:JAVA_HOME
        exit 0
    }
}

if (Test-Path $homeFile) {
    $saved = Get-Content $homeFile -Raw
    if ($saved -and (Test-Path (Join-Path $saved 'bin\java.exe'))) {
        $major = Get-JavaMajor (Join-Path $saved 'bin\java.exe')
        if ($major -ge 17) {
            Save-JavaHome $saved
            exit 0
        }
    }
}

$existing = Get-ChildItem -Path $jdkRoot -Directory -ErrorAction SilentlyContinue |
    Where-Object { Test-Path (Join-Path $_.FullName 'bin\java.exe') } |
    Select-Object -First 1
if ($existing) {
    $major = Get-JavaMajor (Join-Path $existing.FullName 'bin\java.exe')
    if ($major -ge 17) {
        Save-JavaHome $existing.FullName
        exit 0
    }
}

Write-Host 'No hay JDK 17+ local. Descargando Eclipse Temurin 17...'
New-Item -ItemType Directory -Force -Path $jdkRoot | Out-Null
$zip = Join-Path $jdkRoot 'temurin-17.zip'
$urls = @(
    'https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.15%2B6/OpenJDK17U-jdk_x64_windows_hotspot_17.0.15_6.zip',
    'https://api.adoptium.net/v3/binary/latest/17/ga/windows/x64/jdk/hotspot/normal/eclipse?project=jdk'
)

$downloadedOk = $false
foreach ($url in $urls) {
    try {
        Write-Host "Intentando: $url"
        & curl.exe -L --retry 3 --retry-delay 2 -o $zip $url
        if ((Test-Path $zip) -and ((Get-Item $zip).Length -gt 1000000)) {
            $downloadedOk = $true
            break
        }
    } catch {
        Write-Host "Fallo descarga: $_"
    }
}

if (-not $downloadedOk) {
    throw 'No se pudo descargar JDK 17'
}

Expand-Archive -Path $zip -DestinationPath $jdkRoot -Force
Remove-Item $zip -Force

$downloaded = Get-ChildItem -Path $jdkRoot -Directory |
    Where-Object { Test-Path (Join-Path $_.FullName 'bin\java.exe') } |
    Select-Object -First 1

if (-not $downloaded) {
    throw 'No se pudo extraer un JDK 17 en backend/.jdk'
}

Save-JavaHome $downloaded.FullName
