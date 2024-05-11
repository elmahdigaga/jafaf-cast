import { FakerDataType } from '@/types/faker-data-type';
import { faker } from '@faker-js/faker';

export const categories = [
  "airline",
  "animal",
  "color",
  "commerce",
  "company",
  "database",
  "datatype",
  "date",
  "finance",
  "git",
  "hacker",
  "helpers",
  "image",
  "internet",
  "location",
  "lorem",
  "music",
  "number",
  "person",
  "phone",
  "random",
  "science",
  "string",
  "system",
  "vehicle",
  "word",
]

export function getFakerTypes() {
  const dataTypes: Record<string, { category: string, name: string }[]> = {};

  categories.forEach(cat => {
    dataTypes[cat] = Object.keys(faker[cat])
      .filter(i => i !== "faker")
      .map(type => ({ category: cat, name: type }))
  })

  return dataTypes;
}

export function getAllFakerTypes(): FakerDataType[] {
  const fakerTypes: Record<string, { category: string, name: string }[]> = getFakerTypes()
  const allFakerTypes: { category: string, name: string }[] = [];
  Object.entries(fakerTypes).forEach(([, value]) => {
    allFakerTypes.push(...value)
  })

  return allFakerTypes;
}