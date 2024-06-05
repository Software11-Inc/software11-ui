export interface Page {
  id: string;
  name?: string;
  index: number;
}

export interface DeckActivePageProps {
  activePage: Page;
  pages: Page[];
  prefix?: string;
  onChangePage: (page: Page) => void;
}
