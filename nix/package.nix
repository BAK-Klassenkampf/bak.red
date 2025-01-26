{ mkPnpmPackage, inter, pkgs }:
  mkPnpmPackage {
    src = ../.;
    nodejs = pkgs.nodejs_21;
    distDir = ".next";

    preInstall = ''
      cp -r .next/static .next/standalone/.next/
      cp -r public .next/standalone/
    '';
  }