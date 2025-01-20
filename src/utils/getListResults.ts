interface Props {
  page: number
  pages: number
  results: number
  total: number
}

export default function getListResults(props: Props): string {
  let currentResults = props.page === props.pages ? ((props.page - 1) * 18) + props.results : 18 * props.page
  return `From ${((props.page - 1) * 18 || 0) + 1} to ${currentResults} results of ${props.total}`
}