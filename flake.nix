{
  description = "radoslawgrochowski/eslint-config";
  outputs =
    { self, nixpkgs, flake-utils, }:
    flake-utils.lib.eachDefaultSystem
      (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ (final: prev: { nodejs = prev.nodejs_22; }) ];
        };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs
            pkgs.nodePackages.pnpm
          ];
        };
      });
}
