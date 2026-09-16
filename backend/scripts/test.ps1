$ErrorActionPreference = 'Stop'
$backendRoot = Split-Path -Parent $PSScriptRoot
Set-Location $backendRoot

& "$PSScriptRoot\ensure-jdk17.ps1"
if (-not $env:JAVA_HOME) {
    throw 'JAVA_HOME no quedó configurado tras ensure-jdk17.ps1'
}

$env:Path = "$(Join-Path $env:JAVA_HOME 'bin');$env:Path"
& .\mvnw.cmd test
if ($LASTEXITCODE -ne 0) {
    throw "Tests fallaron con código $LASTEXITCODE"
}
