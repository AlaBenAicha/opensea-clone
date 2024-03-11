import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'e52g0t3k',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'ski8CGps35wgM5QS1f93vrYHHJPUF1ED0sYL2gG3vkDd6cKdSOo3n9fZ6B67GOwYNA55lNytrxKPiUYv7pUqQJba4DHcCSLtvvV2A9hspCIVVMEHqHDczXbseMOpoyl6fscuNWtsXOQ6RGRBw560SAzXDcQQJMXv5D6I1yMf16dklwtQazuG',
  useCdn: false,
})
