# Changelog

CHANGELOG.md standards are inspired by [keepachangelog.com](https://keepachangelog.com/en/1.0.0/).

## [5.20.0] - 2024-02-06

### Added

- `focusLoop` api that controls how browser focus behaves when goes out of popper.

### Changed

- Invisible focus return and catch elements are removed that were used for keyboard users focus flow control. Instead, trigger may ignore focus event for a short time just after corresponding popper close.

## [5.19.1] - 2024-02-06

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.18.0 ~> 2.18.1], `@semcore/flex-box` [5.18.0 ~> 5.19.0], `@semcore/neighbor-location` [4.17.0 ~> 4.17.1], `@semcore/outside-click` [3.17.0 ~> 3.17.1], `@semcore/utils` [4.20.0 ~> 4.20.1], `@semcore/core` [2.17.0 ~> 2.17.1]).

## [5.19.0] - 2024-02-01

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.17.1 ~> 2.18.0], `@semcore/flex-box` [5.17.1 ~> 5.18.0], `@semcore/neighbor-location` [4.16.1 ~> 4.17.0], `@semcore/outside-click` [3.16.1 ~> 3.17.0], `@semcore/utils` [4.19.1 ~> 4.20.0], `@semcore/core` [2.16.1 ~> 2.17.0]).

## [5.18.1] - 2024-02-01

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.17.0 ~> 2.17.1], `@semcore/flex-box` [5.17.0 ~> 5.17.1], `@semcore/neighbor-location` [4.16.0 ~> 4.16.1], `@semcore/outside-click` [3.16.0 ~> 3.16.1], `@semcore/utils` [4.19.0 ~> 4.19.1], `@semcore/core` [2.16.0 ~> 2.16.1]).

## [5.18.0] - 2024-01-31

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.16.0 ~> 2.17.0], `@semcore/flex-box` [5.16.0 ~> 5.17.0], `@semcore/neighbor-location` [4.15.0 ~> 4.16.0], `@semcore/outside-click` [3.15.0 ~> 3.16.0], `@semcore/utils` [4.18.0 ~> 4.19.0], `@semcore/core` [2.15.0 ~> 2.16.0]).

## [5.17.0] - 2024-01-19

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.15.0 ~> 2.16.0], `@semcore/flex-box` [5.15.0 ~> 5.16.0], `@semcore/neighbor-location` [4.14.0 ~> 4.15.0], `@semcore/outside-click` [3.14.0 ~> 3.15.0], `@semcore/utils` [4.17.0 ~> 4.18.0], `@semcore/core` [2.14.0 ~> 2.15.0]).

## [5.16.0] - 2024-01-19

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.14.1 ~> 2.15.0], `@semcore/flex-box` [5.14.1 ~> 5.15.0], `@semcore/neighbor-location` [4.13.1 ~> 4.14.0], `@semcore/outside-click` [3.13.1 ~> 3.14.0], `@semcore/core` [2.13.1 ~> 2.14.0]).

## [5.15.0] - 2024-01-11

### Fixed

- After closing popper with interaction `click` focus is returned to the trigger instead of special focus catch element.

## [5.14.2] - 2024-01-10

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.14.0 ~> 2.14.1], `@semcore/flex-box` [5.14.0 ~> 5.14.1], `@semcore/neighbor-location` [4.13.0 ~> 4.13.1], `@semcore/outside-click` [3.13.0 ~> 3.13.1], `@semcore/utils` [4.16.0 ~> 4.16.2], `@semcore/core` [2.13.0 ~> 2.13.1]).

## [5.14.1] - 2023-12-26

### Added

- `disabled` prop to types.

## [5.14.0] - 2023-12-22

### Changed

- When keyboard users are focus-triggered closing popper, trigger is highlighted with focus ring while actually focus is placed on the sibling invisible element.

## [5.14.0-prerelease.1] - 2023-12-22

### Changed

- When keyboard users are focus-triggered closing popper, trigger is highlighted with focus ring while actually focus is placed on the sibling invisible element.

## [5.13.0] - 2023-12-14

### Fixed

- `Select.Item's` `Tooltip` with keyboard navigation.

## [5.12.1] - 2023-12-07

### Fixed

- `focusLock` behavior for `hover` interaction.

## [5.12.0] - 2023-11-28

### Added

- Internal api to enable new focus lock scope.

## [5.11.0] - 2023-12-04

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.11.0 ~> 2.12.0], `@semcore/flex-box` [5.11.0 ~> 5.12.0], `@semcore/neighbor-location` [4.10.0 ~> 4.11.0], `@semcore/outside-click` [3.10.0 ~> 3.11.0], `@semcore/utils` [4.13.0 ~> 4.14.0], `@semcore/core` [2.10.0 ~> 2.11.0]).

## [5.10.0] - 2023-11-24

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.10.2 ~> 2.11.0], `@semcore/flex-box` [5.10.2 ~> 5.11.0], `@semcore/neighbor-location` [4.9.2 ~> 4.10.0], `@semcore/outside-click` [3.9.2 ~> 3.10.0], `@semcore/utils` [4.10.3 ~> 4.13.0], `@semcore/core` [2.9.2 ~> 2.10.0]).

## [5.9.3] - 2023-11-21

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.10.1 ~> 2.10.2], `@semcore/flex-box` [5.10.1 ~> 5.10.2], `@semcore/neighbor-location` [4.9.1 ~> 4.9.2], `@semcore/outside-click` [3.9.1 ~> 3.9.2], `@semcore/utils` [4.10.2 ~> 4.10.3], `@semcore/core` [2.9.1 ~> 2.9.2]).

## [5.9.2] - 2023-10-09

### Fixed

- Fixed popper wasn't opening in date-picker.

## [5.9.1] - 2023-11-09

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.10.0 ~> 2.10.1], `@semcore/flex-box` [5.10.0 ~> 5.10.1], `@semcore/neighbor-location` [4.9.0 ~> 4.9.1], `@semcore/outside-click` [3.9.0 ~> 3.9.1], `@semcore/utils` [4.10.1 ~> 4.10.2], `@semcore/core` [2.9.0 ~> 2.9.1]).

## [5.9.0] - 2023-11-06

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.9.0 ~> 2.10.0], `@semcore/flex-box` [5.9.0 ~> 5.10.0], `@semcore/neighbor-location` [4.8.0 ~> 4.9.0], `@semcore/outside-click` [3.8.0 ~> 3.9.0], `@semcore/utils` [4.9.0 ~> 4.10.1], `@semcore/core` [2.8.0 ~> 2.9.0]).

## [5.8.1] - 2023-11-06

### Fixed

- Prevent popper from opening if `Trigger` is disabled.

## [5.8.0] - 2023-10-27

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.8.2 ~> 2.9.0], `@semcore/flex-box` [5.8.2 ~> 5.9.0], `@semcore/neighbor-location` [4.7.7 ~> 4.8.0], `@semcore/outside-click` [3.7.7 ~> 3.8.0], `@semcore/utils` [4.8.4 ~> 4.9.0], `@semcore/core` [2.7.7 ~> 2.8.0]).

## [5.7.8] - 2023-10-24

### Fixed

- Undelivered ResizeObserver's loop in popper after it is closed.

## [5.7.7] - 2023-10-10

### Fixed

- Added additional checks to prevent focus catching after popper close in some cases when focus is moved to another component and focus catch is not necessary.

## [5.7.6] - 2023-10-10

### Fixed

- Prevent to scroll to `Trigger` item after `Popper` is closed.

## [5.7.5] - 2023-10-06

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.7.4 ~> 2.7.5], `@semcore/flex-box` [5.7.4 ~> 5.7.5], `@semcore/neighbor-location` [4.7.4 ~> 4.7.5], `@semcore/outside-click` [3.7.4 ~> 3.7.5], `@semcore/utils` [4.8.1 ~> 4.8.2], `@semcore/core` [2.7.4 ~> 2.7.5]).

## [5.7.4] - 2023-10-03

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.7.3 ~> 2.7.4], `@semcore/flex-box` [5.7.3 ~> 5.7.4], `@semcore/neighbor-location` [4.7.3 ~> 4.7.4], `@semcore/outside-click` [3.7.3 ~> 3.7.4], `@semcore/utils` [4.8.0 ~> 4.8.1], `@semcore/core` [2.7.3 ~> 2.7.4]).

## [5.7.3] - 2023-10-02

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.7.2 ~> 2.7.3], `@semcore/flex-box` [5.7.2 ~> 5.7.3], `@semcore/neighbor-location` [4.7.2 ~> 4.7.3], `@semcore/outside-click` [3.7.2 ~> 3.7.3], `@semcore/utils` [4.7.2 ~> 4.8.0], `@semcore/core` [2.7.2 ~> 2.7.3]).

## [5.7.2] - 2023-09-20

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.7.1 ~> 2.7.2], `@semcore/flex-box` [5.7.1 ~> 5.7.2], `@semcore/neighbor-location` [4.7.1 ~> 4.7.2], `@semcore/outside-click` [3.7.1 ~> 3.7.2], `@semcore/core` [2.7.1 ~> 2.7.2]).

## [5.7.1] - 2023-09-20

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.7.0 ~> 2.7.1], `@semcore/flex-box` [5.7.0 ~> 5.7.1], `@semcore/neighbor-location` [4.7.0 ~> 4.7.1], `@semcore/outside-click` [3.7.0 ~> 3.7.1], `@semcore/utils` [4.7.0 ~> 4.7.1], `@semcore/core` [2.7.0 ~> 2.7.1]).

## [5.7.0] - 2023-09-13

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.6.3 ~> 2.7.0], `@semcore/flex-box` [5.6.3 ~> 5.7.0], `@semcore/neighbor-location` [4.6.3 ~> 4.7.0], `@semcore/outside-click` [3.6.3 ~> 3.7.0], `@semcore/utils` [4.6.3 ~> 4.7.0], `@semcore/core` [2.6.3 ~> 2.7.0]).

## [5.6.3] - 2023-09-12

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.6.2 ~> 2.6.3], `@semcore/flex-box` [5.6.2 ~> 5.6.3], `@semcore/neighbor-location` [4.6.2 ~> 4.6.3], `@semcore/outside-click` [3.6.2 ~> 3.6.3], `@semcore/core` [2.6.2 ~> 2.6.3]).

## [5.6.2] - 2023-09-08

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.6.1 ~> 2.6.2], `@semcore/flex-box` [5.6.1 ~> 5.6.2], `@semcore/neighbor-location` [4.6.1 ~> 4.6.2], `@semcore/outside-click` [3.6.1 ~> 3.6.2], `@semcore/utils` [4.6.1 ~> 4.6.2], `@semcore/core` [2.6.1 ~> 2.6.2]).

## [5.6.1] - 2023-09-05

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.6.0 ~> 2.6.1], `@semcore/flex-box` [5.6.0 ~> 5.6.1], `@semcore/neighbor-location` [4.6.0 ~> 4.6.1], `@semcore/outside-click` [3.6.0 ~> 3.6.1], `@semcore/core` [2.6.0 ~> 2.6.1]).

## [5.6.0] - 2023-09-04

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.5.0 ~> 2.6.0], `@semcore/flex-box` [5.5.0 ~> 5.6.0], `@semcore/neighbor-location` [4.5.0 ~> 4.6.0], `@semcore/outside-click` [3.5.0 ~> 3.6.0], `@semcore/core` [2.5.0 ~> 2.6.0]).

## [5.5.0] - 2023-08-28

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.4.1 ~> 2.5.0], `@semcore/flex-box` [5.4.1 ~> 5.5.0], `@semcore/neighbor-location` [4.4.1 ~> 4.5.0], `@semcore/outside-click` [3.4.1 ~> 3.5.0], `@semcore/utils` [4.4.1 ~> 4.5.0], `@semcore/core` [2.4.1 ~> 2.5.0]).

## [5.4.1] - 2023-08-24

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.4.0 ~> 2.4.1], `@semcore/flex-box` [5.4.0 ~> 5.4.1], `@semcore/neighbor-location` [4.4.0 ~> 4.4.1], `@semcore/outside-click` [3.4.0 ~> 3.4.1], `@semcore/utils` [4.4.0 ~> 4.4.1], `@semcore/core` [2.4.0 ~> 2.4.1]).

## [5.4.0] - 2023-08-23

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.3.1 ~> 2.4.0], `@semcore/flex-box` [5.3.1 ~> 5.4.0], `@semcore/neighbor-location` [4.3.1 ~> 4.4.0], `@semcore/outside-click` [3.3.1 ~> 3.4.0], `@semcore/utils` [4.3.1 ~> 4.4.0], `@semcore/core` [2.3.1 ~> 2.4.0]).

## [5.3.1] - 2023-08-21

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.3.0 ~> 2.3.1], `@semcore/flex-box` [5.3.0 ~> 5.3.1], `@semcore/neighbor-location` [4.3.0 ~> 4.3.1], `@semcore/outside-click` [3.3.0 ~> 3.3.1], `@semcore/core` [2.3.0 ~> 2.3.1]).

## [5.3.0] - 2023-08-18

### Changed

- Version preminor update due to children dependencies update (`@semcore/animation` [2.2.1 ~> 2.3.0], `@semcore/flex-box` [5.2.1 ~> 5.3.0], `@semcore/neighbor-location` [4.2.1 ~> 4.3.0], `@semcore/outside-click` [3.2.0 ~> 3.3.0], `@semcore/utils` [4.2.0 ~> 4.3.0], `@semcore/core` [2.2.1 ~> 2.3.0]).

## [5.2.2] - 2023-08-18

### Changed

- Version prepatch update due to children dependencies update (`@semcore/neighbor-location` [4.2.0 ~> 4.2.1]).

## [5.2.1] - 2023-08-16

### Changed

- Version prepatch update due to children dependencies update (`@semcore/animation` [2.2.0 ~> 2.2.1], `@semcore/flex-box` [5.2.0 ~> 5.2.1], `@semcore/neighbor-location` [4.1.0 ~> 4.2.0], `@semcore/outside-click` [3.1.0 ~> 3.2.0], `@semcore/utils` [4.1.0 ~> 4.2.0], `@semcore/core` [2.2.0 ~> 2.2.1]).

## [5.2.0] - 2023-08-07

### Changed

- Version minor update due to children dependencies update (`@semcore/animation` [2.1.0 ~> 2.2.0], `@semcore/flex-box` [5.1.0 ~> 5.2.0], `@semcore/neighbor-location` [4.0.1 ~> 4.1.0], `@semcore/outside-click` [3.0.0 ~> 3.1.0], `@semcore/utils` [4.0.0 ~> 4.1.0]).

## [5.1.0] - 2023-08-01

### Changed

- Version minor update due to children dependencies update (`@semcore/animation` [2.0.0 ~> 2.1.0], `@semcore/flex-box` [5.0.0 ~> 5.1.0]).

## [5.0.2] - 2023-07-24

### Changed

- Version patch update due to children dependencies update (`@semcore/neighbor-location` [4.0.0 ~> 4.0.1]).

## [5.0.1] - 2023-07-18

### Fix

- Removed ResizeObserver initiating during SSR.

## [5.0.0] - 2023-07-17

### Break

- Removed previously deprecated props `positionFixed`, `eventsDisabled`, `boundary`, `displayEvents`, `displayTimeout`, `popperZIndex`.
- Strict, backward incompatible typings.

## [4.19.6] - 2023-06-30

## [4.19.5] - 2023-06-27

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.19 ~> 1.10.20], `@semcore/flex-box` [4.7.31 ~> 4.7.32], `@semcore/neighbor-location` [3.1.37 ~> 3.1.38], `@semcore/outside-click` [2.5.36 ~> 2.5.37], `@semcore/utils` [3.53.4 ~> 3.54.0]).

## [4.19.4] - 2023-06-22

### Fixed

- Keyboard focused poppers were not intractable with mouse.

## [4.19.3] - 2023-06-14

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.18 ~> 1.10.19], `@semcore/flex-box` [4.7.30 ~> 4.7.31], `@semcore/neighbor-location` [3.1.36 ~> 3.1.37], `@semcore/outside-click` [2.5.35 ~> 2.5.36], `@semcore/utils` [3.53.3 ~> 3.53.4]).

## [4.19.2] - 2023-06-12

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.17 ~> 1.10.18], `@semcore/flex-box` [4.7.29 ~> 4.7.30], `@semcore/neighbor-location` [3.1.35 ~> 3.1.36], `@semcore/outside-click` [2.5.34 ~> 2.5.35], `@semcore/utils` [3.53.2 ~> 3.53.3]).

## [4.19.1] - 2023-06-09

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.16 ~> 1.10.17], `@semcore/flex-box` [4.7.28 ~> 4.7.29], `@semcore/neighbor-location` [3.1.34 ~> 3.1.35], `@semcore/outside-click` [2.5.33 ~> 2.5.34], `@semcore/utils` [3.53.1 ~> 3.53.2]).

## [4.19.0] - 2023-06-07

### Fixed

- Fixed corner case of focus return with `interaction=focus`.
- Added `disableEnforceFocus` api prop.

## [4.18.0] - 2023-06-06

### Changed

- Updating `strategy`, `placement`, `offset`, `preventOverflow`, `arrow`, `flip`, `computeStyles`, `eventListeners` or `onFirstUpdate` props now triggers popper positioning update.

## [4.17.17] - 2023-06-02

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.14 ~> 1.10.15]).

## [4.17.16] - 2023-05-31

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.13 ~> 1.10.14], `@semcore/flex-box` [4.7.26 ~> 4.7.27], `@semcore/neighbor-location` [3.1.32 ~> 3.1.33], `@semcore/outside-click` [2.5.31 ~> 2.5.32], `@semcore/utils` [3.52.0 ~> 3.53.0]).

## [4.17.15] - 2023-05-29

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.12 ~> 1.10.13]).

## [4.17.14] - 2023-05-25

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.11 ~> 1.10.12], `@semcore/flex-box` [4.7.25 ~> 4.7.26], `@semcore/neighbor-location` [3.1.31 ~> 3.1.32], `@semcore/outside-click` [2.5.30 ~> 2.5.31], `@semcore/utils` [3.51.1 ~> 3.52.0]).

## [4.17.13] - 2023-05-24

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.10 ~> 1.10.11], `@semcore/flex-box` [4.7.24 ~> 4.7.25], `@semcore/neighbor-location` [3.1.30 ~> 3.1.31], `@semcore/outside-click` [2.5.29 ~> 2.5.30], `@semcore/utils` [3.51.0 ~> 3.51.1]).

## [4.17.12] - 2023-05-22

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.9 ~> 1.10.10], `@semcore/flex-box` [4.7.23 ~> 4.7.24], `@semcore/neighbor-location` [3.1.29 ~> 3.1.30], `@semcore/outside-click` [2.5.28 ~> 2.5.29], `@semcore/utils` [3.50.7 ~> 3.51.0]).

## [4.17.11] - 2023-05-19

### Added

- Set default color of popper for better support of dark themes.

## [4.17.10] - 2023-05-11

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.8 ~> 1.10.9], `@semcore/flex-box` [4.7.22 ~> 4.7.23], `@semcore/neighbor-location` [3.1.28 ~> 3.1.29], `@semcore/outside-click` [2.5.27 ~> 2.5.28], `@semcore/utils` [3.50.6 ~> 3.50.7]).

## [4.17.9] - 2023-05-11

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.7 ~> 1.10.8], `@semcore/flex-box` [4.7.21 ~> 4.7.22], `@semcore/neighbor-location` [3.1.27 ~> 3.1.28], `@semcore/outside-click` [2.5.26 ~> 2.5.27], `@semcore/utils` [3.50.5 ~> 3.50.6]).

## [4.17.8] - 2023-05-04

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.10.7 ~> 1.10.8], `@semcore/flex-box` [4.7.21 ~> 4.7.22], `@semcore/neighbor-location` [3.1.27 ~> 3.1.28], `@semcore/outside-click` [2.5.26 ~> 2.5.27], `@semcore/utils` [3.50.5 ~> 3.50.6]).

## [4.17.7] - 2023-05-04

### Fixed

- Using `ignorePortalsStacking` on top-level poppers was causing application crash.

## [4.17.6] - 2023-05-03

### Fixed

- Fixed issue with popper first showing on multiple triggers

## [4.17.5] - 2023-05-02

### Fixed

- `interaction=hover` poppers now might be triggered by keyboard focus (but not mouse focus).

## [4.17.1] - 2023-04-03

### Changed

- Moved screen reader hint from `aria-label` attribute to `aria-live="polite"` alert block.
- Improved keyboard navigation on exit from focus-triggered popovers.

## [4.16.12] - 2023-03-28

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.9.9 ~> 1.10.0], `@semcore/flex-box` [4.7.17 ~> 4.7.18], `@semcore/neighbor-location` [3.1.23 ~> 3.1.24], `@semcore/outside-click` [2.5.22 ~> 2.5.23], `@semcore/portal` [2.5.17 ~> 2.6.0], `@semcore/utils` [3.49.1 ~> 3.50.0]).

## [4.16.10] - 2023-03-24

### Fixed

- Fixed local themes in poppers.

## [4.16.9] - 2023-03-24

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.9.6 ~> 1.9.7], `@semcore/flex-box` [4.7.14 ~> 4.7.15], `@semcore/neighbor-location` [3.1.20 ~> 3.1.21], `@semcore/outside-click` [2.5.19 ~> 2.5.20], `@semcore/utils` [3.48.0 ~> 3.48.1]).

## [4.16.5] - 2023-03-09

### Fixed

- Fixed focus locking and returning.

## [4.16.4] - 2023-03-01

### Fixed

- Fixed `animationsDisabled` prop passing.

## [4.16.3] - 2023-02-28

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.9.1 ~> 1.9.2]).

## [4.16.2] - 2023-02-22

### Fixed

- Fixed popper autofocus wasn't working if popper contains any focusable elements.

## [4.16.1] - 2023-02-21

### Changed

- Version patch update due to children dependencies update (`@semcore/animation` [1.9.0 ~> 1.9.1], `@semcore/flex-box` [4.7.9 ~> 4.7.10], `@semcore/neighbor-location` [3.1.15 ~> 3.1.16], `@semcore/outside-click` [2.5.14 ~> 2.5.15], `@semcore/utils` [3.47.0 ~> 3.47.1]).

## [4.16.0] - 2023-02-20

### Added

- Added appear and disappear animation.

## [4.15.2] - 2023-01-20

### Changed

- Version patch update due to children dependencies update (`@semcore/flex-box` [4.7.6 ~> 4.7.7], `@semcore/neighbor-location` [3.1.12 ~> 3.1.13], `@semcore/outside-click` [2.5.11 ~> 2.5.12], `@semcore/utils` [3.45.0 ~> 3.46.0]).

## [4.15.0] - 2023-01-16

### Fixed

- Fixed focus hijacking by non editable poppers.

## [4.14.4] - 2023-01-09

### Changed

- Version patch update due to children dependencies update (`@semcore/flex-box` [4.7.3 ~> 4.7.4], `@semcore/neighbor-location` [3.1.9 ~> 3.1.10], `@semcore/outside-click` [2.5.8 ~> 2.5.9], `@semcore/utils` [3.44.1 ~> 3.44.2]).

## [4.14.1] - 2022-12-13

### Changed

- Added `react-dom` to peer dependencies.

## [4.14.0] - 2022-12-12

### Added

- Design tokens based theming.

## [4.13.4] - 2022-10-30

### Changed

- Updated `focus-lock`.

## [4.13.3] - 2022-10-28

### Changed

- Version patch update due to children dependencies update (`@semcore/flex-box` [4.6.2 ~> 4.6.3], `@semcore/neighbor-location` [3.1.2 ~> 3.1.3], `@semcore/outside-click` [2.5.2 ~> 2.5.3], `@semcore/utils` [3.40.0 ~> 3.40.0]).

## [4.13.0] - 2022-10-10

### Changed

- Added support for React 18 🔥

## [4.12.0] - 2022-10-07

### Changed

- Updated major dependency `@semcore/neighbor-location` [2.3.15 ~> 3.0.0]

## [4.11.31] - 2022-10-04

### Changed

- Version patch update due to children dependencies update (`@semcore/flex-box` [4.5.11 ~> 4.5.12], `@semcore/neighbor-location` [2.3.15 ~> 2.3.16], `@semcore/outside-click` [2.4.13 ~> 2.4.14], `@semcore/utils` [3.37.1 ~> 3.37.2]).

## [4.11.30] - 2022-09-30

### Fixed

- Removed aria attributes that were breaking components a11y.

## [4.11.29] - 2022-08-30

### Changed

- Version patch update due to children dependencies update (`@semcore/flex-box` [4.5.10 ~> 4.5.11], `@semcore/neighbor-location` [2.3.14 ~> 2.3.15], `@semcore/outside-click` [2.4.12 ~> 2.4.13], `@semcore/utils` [3.37.0 ~> 3.37.1]).

## [4.11.24] - 2022-07-18

### Fixed

- Fixed possibility to insert render function into `Popper.Trigger`.

## [4.11.23] - 2022-07-14

### Changed

- Version patch update due to children dependencies update (`@semcore/neighbor-location` [2.3.9 ~> 2.3.10]).

## [4.11.19] - 2022-05-19

### Fixed

- Synced dependencies versions to remove duplicates in the single export package.

## [4.11.17] - 2022-03-14

### Changed

- Version patch update due to children dependencies update (`@semcore/flex-box` [4.5.0 ~> 4.5.1], `@semcore/neighbor-location` [2.3.4 ~> 2.3.5], `@semcore/outside-click` [2.4.2 ~> 2.4.3], `@semcore/utils` [3.31.2 ~> 3.31.2]).

## [4.11.16] - 2022-02-24

### Added

- Added repository field to package.json file.

## [4.11.15] - 2021-12-22

### Changed

- remove functionality for stop propagation of events `onMouseEnter, onMouseLeave` from the `<Popper.Popper/>`.

## [4.11.14] - 2021-12-07

### Fixed

- Property `root` for Popper set to `OutsideClick`.

## [4.11.13] - 2021-10-18

### Changed

- Up version package `focus-lock`.

## [4.11.12] - 2021-8-26

### Changed

- Add 'sideEffect=false' for more optimal build via webpack

## [4.11.11] - 2021-07-06

### Fixed

- Fixed cjs build package.

## [4.11.10] - 2021-06-22

### Changed

- Improved render performance

## [4.11.9] - 2021-06-18

### Fixed

- Fixed forwarding properties to the `Box` in `Popper.Popper`.

## [4.11.8] - 2021-06-10

### Fixed

- Fixed set prop `returnFocus` for Focus-Lock

## [4.11.7] - 2021-06-08

### Fixed

- Fix TS type

## [4.11.6] - 2021-06-04

### Fixed

- [A11] Fixed set `aria-pressed` for `Popper.Trigger`.

## [4.11.5] - 2021-05-17

### Fixed

- Add type for handlers for render function

## [4.11.4] - 2021-05-11

### Fixed

- Fix TS type

## [4.11.3] - 2021-05-05

### Changed

- Rewrite code from TS to JS 🧑‍💻

### Fixed

- Fix position arrow after change version `popperjs`.

## [4.10.1] - 2021-04-28

### Fixed

- Fixed the setting of attributes in HTML.

## [4.10.0] - 2021-4-26

### Changed

- Version of dependence `@semcore/core` has been changed to `1.11`.
- Improved performance. Removed one component wrapper.
- The style processing system has been changed.
- Removed the ability to apply media styles via a plugin `babel-plugin-react-semcore`.

## [4.9.0] - 2021-04-20

### Added

- Added functions `setTrigger, setPopper` in context for Popper.

### Changed

- Bump `poperjs` to `2.9.2`.

## [4.8.0] - 2020-12-17

### Added

- Added supported react@17.

## [4.7.2] - 2020-12-16

### Fixed

- Сomponent has become friendlier to SSR. Replace random generate number to get uid from function `useUID`.

## [4.7.1] - 2020-11-25

### Fixed

- Fixed import paths from `@popperjs`.
- Refactor modifier `arrowOffset` that calculates arrow position.

## [4.7.0] - 2020-11-10

### Added

- Added the ability to use one `<Popper.Popper/>` with multiple `<Popper.Trigger/>`

### Changed

- Removed the display of the popper by focus when navigating from the keyboard, it caused many bugs 🤷‍♂️

## [4.6.2] - 2020-10-29

### Fixed

- Added the placeholder for ID style tag to improve collision protection.

## [4.6.1] - 2020-09-30

### Added

- Added generic for better `value` and `onChange` typings

### Changed

- Update @semcore/core version to ^1.8
- Update dependency package `@popperjs/core` version from `2.4.0` to `2.5.3`

## [4.5.0] - 2020-09-11

### Added

- Add functionality for stop propagation of events from the `<Popper.Popper/>`, more details [here](https://github.com/facebook/react/issues/11387).

## [4.4.2] - 2020-09-08

### Fixed

- Fixed possible styles collisions between components with different versions, but same styles

## [4.4.1] - 2020-08-17

### Fixed

- Исправлены ts типы для `offset`

## [4.4.0] - 2020-08-05

### Added

- Зависимость от `neighbor-location` для обнуления расположения соседних элементов внутри `Popper.Popper`.

## [4.3.0] - 2020-07-22

### Fixed

- Оптимизировали перерендеры триггера и поппера

### Added

- Добавили `ResizeObserver` для слежения за изменением размеров триггера или поппера для правильного позиционирования поппера

## [4.2.2] - 2020-07-15

### Fixed

- Зафиксирована версия `@popperjs/core`, так как последняя версия вызывает ошибку с бесконечным циклом

## [4.2.1] - 2020-07-06

### Fixed

- Убраны `import type` из Popper.tsx

## [4.2.0] - 2020-07-06

### Added

- Добавлен кастомный модификатор `arrow` для корректного выравнивания стрелки в `Popper.Popper`

## [4.1.1] - 2020-06-26

### Fixed

- Восстановлены экспорты типов `Placement`, `Modifiers`, `Strategy`

## [4.1.0] - 2020-06-08

### Added

- Добавлено свойство `interaction='none'` для выключения реакции на любые события.

## [4.0.3] - 2020-06-02

### BREAK

- Изменения описаны в [migration guide](/internal/migration-guide)

## [3.6.3] - 2020-03-25

### Fixed

- Добавлена пропущенная зависимость `@semcore/ui`

## [3.6.1] - 2019-12-27

### Fixed

- Исправлена ошибка при который TS не мог найти типы, так как конфликтовали `Popper/index.ts` и `Popper.ts`.

## [3.6.0] - 2019-12-12

### Added

- Появилась возможность добавления различных стилистических тем через css переменные
- Появилась возможность оптицонально подключать адаптивноссть
- Появилась возможность изолировать стили даже в пределах одной страницы

### Changed

- Изменен алгоритм вставки стилей в head

### Removed

- Убраны относительные единицы измерения(rem), которые использовались для адаптивности

## [3.5.1] - 2019-11-14

### Fixed

- Поправили доступ к `DOM` нодам `Trigger, Popper`

## [3.5.0] - 2019-10-10

### Changed

- Убрано `inline` свойство для дефолтного триггера

## [3.4.0] - 2019-10-08

### Added

- Добавлен `resize-observer` для автоматического выравнивания при изменении размеров

## [3.3.5] - 2019-09-30

### Changed

- Нужные зависимости перенесены в `utils`, размер должен стать меньше

## [3.3.4] - 2019-09-05

### Fixed

- Исправлена ошибка типизации `Popper`

## [3.3.3] - 2019-07-05

### Fixed

- Исправлена ошибка при отсутствии `onOutsideClick`

## [3.3.1] - 2019-07-05

### Fixed

- Убрал лишний рендер, улучшена производительность

## [3.3.0] - 2019-06-25

### Added

- Добавлен доступ к пропу `ecludedRefs` вложенного `@semcore/outside-click`

## [3.2.3] - 2019-06-13

### Fixed

- Исправлена проблема открытия `Popper` при начале клика на `Trigger`-е, а заканчивание на `Popper`-е

## [3.2.2] - 2019-06-06

### Fixed

- Отключение перерендера `Trigger` при закрытом `Popper`

## [3.2.1] - 2019-06-04

### Changed

- Расчет положения `Popper` для крайних положений ("start", "end").

## [3.2.0] - 2019-04-17

### Added

- Добавлен Box в `Popper` и `Trigger`

### Changed

- Увеличен `z-index` до 110
- Расширен контекст в `Popper` и `Trigger`

## [3.1.5] - 2019-03-21

### Fixed

- Добавлено предсказуемое поведение на закрытие при размещении одного `Popper` в другом `Popper`

## [3.1.4] - 2019-03-13

### Added

- Добавлено св-во `popperZIndex`, отвечает за `z-index` выпадающего окна

## [3.1.3] - 2019-02-20

### Fixed

- Баг с отсутствием ререндера `Popper.Popper` при именении стилей popper.js

## [3.1.2] - 2019-01-22

### Added

- Экспорт `PortalProvider`

### Changed

- Переименован props `disablePortalRender` -> `disablePortal`

## [3.1.1] - 2019-01-21

### Changed

- Поднята версия зависимости @semcore/utils до 2.0.0

## [3.1.0] - 2018-11-23

### Added

- Добавлен autocomplete для IDE

## [3.0.0] - 2018-11-01

### BREAK

- переименован export компоненетов с `{ Manage, Reference, Popper }` на статичные default компонента
- переименован компонент `Reference` в `Trigger`
- удалено свойство `popperDisplayEvents` и его функционал
- переименовано свойство `referenceDisplayEvents` в `displayEvents`
- переименовано свойство `showTimeout` и `hideTimeout` в `displayTimeout.show` и `displayTimeout.hide`

## [2.0.0] - 2018-10-11

### BREAK

- изменено возвращаемое значение с `ref, handlers, ...` на `getPopperProps`, `getArrowProps` и `getTriggerProps` для `Reference` и `Popper` компонентов
- возможность изменить `default` значения свойств для `Manager`
- возможность подменить контекст у всех компонентов
- добавлен обязательное свойство `tag` компонент для `Reference`
- переименован функциональный аргумент передаваемый в функцию рендера с `onVisibleChane` на `changeVisible`

## [1.0.2] - 2018-09-27

### Changed

- версию пакета `@semcore/utils`

## [1.0.1] - 2018-09-27

### Added

- зависимость в `package.json` от `@semcore/portal`

## [1.0.0] - 2018-09-27

### Added

- Initial release
