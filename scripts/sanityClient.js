"use strict";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
  projectId: "pn6khqzb", // Replace with your project ID
  dataset: "production", // Or your dataset name
  apiVersion: "2024-01-04", // Today's date or latest API version
  useCdn: false, // Disable CDN for real-time updates
  token:
    "skd8mTg795RmHWtv51rdeGoajHXGLc3iKGOlCDjKty9tzutHomV8oPLeoL6EhtqMECMGOgkMcOGsrXq3dnAhWVh0oFT2Dog37sbKvhbGYfLyAgrAjVlmCBCFwnNiWz4o1vGHGnoH8011xbJAfjpoiRtJbmZNEyeRdGkl1fHC5bTVWrRKucRI",
});
