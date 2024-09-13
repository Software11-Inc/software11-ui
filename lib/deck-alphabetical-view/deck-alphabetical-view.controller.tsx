import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";
import { combineLatest } from "rxjs/internal/observable/combineLatest";
import { fromEvent } from "rxjs/internal/observable/fromEvent";
import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { map } from "rxjs/internal/operators/map";
import { startWith } from "rxjs/internal/operators/startWith";
import { alphabeticalViewNavClass } from "./deck-alphabetical-view.styles";
import { Alphabet, AlphabetKey, AlphabetMap, IDeckAlphabeticalController } from "./deck-alphabetical-view.types";

export class DeckAlphabeticalController implements IDeckAlphabeticalController {
  public alphabet!: AlphabetMap;

  private _bodyStyleObserver!: MutationObserver;

  public internalTrigger: BehaviorSubject<void> = new BehaviorSubject<void>(undefined);

  constructor() {
    this._initAlphabet();
    this._initObserver();
  }

  /**
   * This method is used to initialize the alphabet map.
   * It iterates over the keys of the Alphabet enum and maps each key to its corresponding value in the Alphabet enum.
   * The result is an object where the keys are the Alphabet keys and the values are the Alphabet values.
   *
   * @returns {void}
   */
  private _initAlphabet = (): void => {
    this.alphabet = Object.keys(Alphabet).reduce((acc, key) => {
      acc[key as AlphabetKey] = Alphabet[key as AlphabetKey];
      return acc;
    }, {} as AlphabetMap);
  };

  /**
   * This method is used to initialize the body style observer.
   * It creates a new MutationObserver that triggers the internal trigger observable whenever the style of the body changes.
   *
   * @returns {void}
   */
  private _initObserver = (): void => {
    this._bodyStyleObserver = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        this.internalTrigger.next();
      });
    });
  };

  /**
   * This method is used to observe changes to the style attribute of the body element.
   * It selects the body element from the document and starts observing it for changes to its style attribute.
   *
   * @returns {void}
   */
  public observe(): void {
    const body = document.querySelector("body");
    if (!body) {
      return;
    }
    this._bodyStyleObserver.observe(body, {
      attributes: true,
      attributeFilter: ["style"],
    });
  }

  /**
   * This method is used to disconnect the body style observer.
   * It calls the `disconnect` method of the `bodyStyleObserver` object, which stops the observer from observing any changes.
   *
   * @returns {void}
   */
  public disconnect(): void {
    this._bodyStyleObserver.disconnect();
  }

  /**
   * This method is used to get the height of the header.
   * It selects the header element from the document and returns its client height.
   * If the header element is not found, it returns 0.
   *
   * @returns {number} The height of the header.
   */
  private _getHeaderHeight = (): number => {
    const header = document.querySelector(".deck-header");
    return header?.clientHeight || 0;
  };

  /**
   * Calculates the total height of all elements with the "deck-sticky" class.
   * This is used to determine the height occupied by sticky containers, which can
   * affect the layout or scrolling behavior of the page.
   *
   * @returns {number} The total height of all "deck-sticky" elements.
   */
  private _getStickyContainersHeight = (): number => {
    // Select all elements with the "deck-sticky" class
    const stickyContainers = document.querySelectorAll(".page-section.deck-sticky");

    // Accumulate the total height of these elements
    return Array.from(stickyContainers).reduce((totalHeight, container) => totalHeight + container.clientHeight, 0);
  };

  /**
   * This method is used to get the height of the footer.
   * It selects the footer element from the document and returns its client height.
   * If the footer element is not found, it returns 0.
   *
   * @returns {number} The height of the footer.
   */
  private _getFooterHeight = (): number => {
    const footer = document.querySelector(".deck-footer");
    return footer?.clientHeight || 0;
  };

  private _getBodyPadding = (): string => {
    const body = document.querySelector("body");
    return body?.style.paddingRight || "0px";
  };

  /**
   * Automatically sets the style attributes for the navigation container.
   */
  public setNavAttributes = (): void => {
    const headerHeight = this._getHeaderHeight();
    const stickyContainersHeight = this._getStickyContainersHeight();
    const footerHeight = this._getFooterHeight();
    const bodyPadding = this._getBodyPadding();

    const nav = document.querySelector(`.${alphabeticalViewNavClass}`);
    if (!nav) {
      return;
    }

    const top = `calc(${headerHeight}px + ${stickyContainersHeight}px + 1rem)`;
    const bottom = `calc(${footerHeight}px + 1rem)`;
    const right = bodyPadding.length > 0 ? `calc(${bodyPadding} + 0.5rem)` : "0.5rem";

    nav.setAttribute("style", `top: ${top}; bottom: ${bottom}; right: ${right};`);
  };

  /**
   * This method is used to adjust the position of the alphabetical navigation container based on the scroll position.
   * It listens to the scroll events of the window and the internal trigger observable.
   * When either of these observables emit a new value, it calculates the new top, bottom, and right positions of the navigation container and updates its style.
   *
   * @returns {Observable<void>} An observable that emits whenever the style of the navigation container is updated.
   */
  public scrollSpy = (): Observable<void> => {
    return combineLatest([
      fromEvent(window, "scroll").pipe(startWith(0), debounceTime(100)),
      this.internalTrigger.asObservable(),
    ]).pipe(
      debounceTime(10),
      map(() => {
        this.setNavAttributes();
      })
    );
  };
}
