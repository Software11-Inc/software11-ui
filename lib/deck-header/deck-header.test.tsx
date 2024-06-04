import { render } from "@testing-library/react";

import { DeckHeader } from "./deck-header.component";

describe(`Component: ${DeckHeader.name}`, () => {
  it("should render without crashing", () => {
    const { container } = render(
      <DeckHeader
        title="title"
        description="description"
        fullName="John Doe"
        email="john.doe@gmail.com"
        role="role"
        avatarUrl=""
        onBack={() => {}}
        onLogout={() => {}}
        showNavigation={false}
      />
    );

    expect(container).toBeTruthy();
  });
});
