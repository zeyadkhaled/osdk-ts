#!/usr/bin/env node
// @ts-check

// @ts-ignore
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
import { cli } from "../build/js/index.mjs";
cli();
