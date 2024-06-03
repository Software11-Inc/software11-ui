import { render } from "@testing-library/react";

import { DeckHeader } from "./deck-header.component";

describe(`Component: ${DeckHeader.name}`, () => {
    it("should render without crashing", () => {
       const {container} = render(<DeckHeader label="Deck Header" />);

       expect(container).toBeTruthy();
    });
});