// Copyright (c) 2019 Denolibs authors. All rights reserved. MIT license.
import Debug from "https://deno.land/x/debuglog/debug.ts";
const debug = Debug("deno_template");

debug(
  "Deno v%s running with command line arguments %o",
  Deno.version.deno,
  Deno.args
);

// Even if we don't export a default, keeping this here enables /mod.ts in the root directory to work properly.
// It also makes sure the compiler knows that this is a module.
export default {};
