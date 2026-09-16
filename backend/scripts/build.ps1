$ErrorActionPreference = 'Stop'
$backendRoot = Split-Path -Parent $PSScriptRoot
Set-Location $backendRoot

& "$PSScriptRoot\ensure-jdk17.ps1"
if (-not $env:JAVA_HOME) {
    throw 'JAVA_HOME no quedó configurado tras ensure-jdk17.ps1'
}

$env:Path = "$(Join-Path $env:JAVA_HOME 'bin');$env:Path"
Write-Host "Compilando con $($env:JAVA_HOME)"
& .\mvnw.cmd -q -DskipTests package
if ($LASTEXITCODE -ne 0) {
    throw "Maven falló con código $LASTEXITCODE"
}
Write-Host 'Build OK: backend/target/*.jar'
