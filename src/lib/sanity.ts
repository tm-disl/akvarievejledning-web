import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '44cz1bzm',
  dataset: 'production',
  apiVersion: '2025-05-16',
  useCdn: true,
})
