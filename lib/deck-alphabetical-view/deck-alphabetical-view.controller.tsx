import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Alphabet, AlphabetKey, AlphabetMap, IDeckAlphabeticalController } from "./deck-alphabetical-view.types";
import { combineLatest } from "rxjs/internal/observable/combineLatest";
import { debounceTime } from "rxjs/internal/operators/debounceTime";
import { map } from "rxjs/internal/operators/map";
import { Observable } from "rxjs/internal/Observable";
import { alphabeticalViewNavClass } from "./deck-alphabetical-view.styles";

export class DeckAlphabeticalController implements IDeckAlphabeticalController {
  public alphabet!: AlphabetMap;

  private _bodyStyleObserver!: MutationObserver;

  private _internalTrigger: BehaviorSubject<void> = new BehaviorSubject<void>(undefined);

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
        this._internalTrigger.next();
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
   * This method is used to get the height of the footer.
   * It selects the footer element from the document and returns its client height.
   * If the footer element is not found, it returns 0.
   *
   * @returns {number} The height of the footer.
   */
  private _getFooterHeight = (): number => {
    const footer = document.querySelector(".page-footer");
    return footer?.clientHeight || 0;
  };

  /**
   * This method is used to adjust the position of the alphabetical navigation container based on the scroll position.
   * It listens to the scroll events of the window and the internal trigger observable.
   * When either of these observables emit a new value, it calculates the new top, bottom, and right positions of the navigation container and updates its style.
   *
   * @returns {Observable<void>} An observable that emits whenever the style of the navigation container is updated.
   */
  public scrollSpy = (): Observable<void> => {
    return combineLatest([this._internalTrigger.asObservable()]).pipe(
      debounceTime(1),
      map(() => {
        const headerHeight = this._getHeaderHeight();

        const nav = document.querySelector(`.${alphabeticalViewNavClass}`);
        if (!nav) {
          return;
        }

        const top = `calc(${headerHeight}px + 1rem)`;

        nav.setAttribute("style", `top: ${top}`);
      })
    );
  };
}
