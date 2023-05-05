// sanity.config.js
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';
import deskStructure from './deskStructure';

export default defineConfig({
  title: 'atticaaudio',
  projectId: 'xgirpvqb',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
  ],
  schema: {
    types: schemas,
  },
});
