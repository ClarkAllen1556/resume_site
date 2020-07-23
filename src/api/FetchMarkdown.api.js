import { readFile } from 'fs '

export default function fetchMarkdown(mdPath) {
  return readFile(mdPath, 'utf8', (err, data) => {
    return mdPath
  })
}