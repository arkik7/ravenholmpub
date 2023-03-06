import {createClient} from '@sanity/client'
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: '2023-02-22',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source)