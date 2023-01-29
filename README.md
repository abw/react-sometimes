# react-sometimes

<p align="center">
  <a href="https://www.npmjs.com/package/react-sometimes">
    <img src="https://img.shields.io/npm/v/react-sometimes.svg" alt="npm version" >
  </a>
  <a href="https://packagephobia.now.sh/result?p=react-sometimes">
    <img src="https://packagephobia.now.sh/badge?p=react-sometimes" alt="install size" >
  </a>
  <a href="https://github.com/abw/react-sometimes/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/react-sometimes.svg" alt="license">
  </a>
</p>

This is a React component which can be used to conditionally render content
based on a date/time range.

## Installation

Install `react-sometimes` using your favourite package manager.

### npm

    npm install @abw/react-sometimes

### pnpm

    pnpm add @abw/react-sometimes

### yarn

    yarn add @abw/react-sometimes

## Usage

Import the component from `react-sometimes`.

```jsx
import Sometimes from 'react-sometimes'
```

## The `from` and `to` Properties

The component accepts `from` and `to` properties which define a time period
when the content should be rendered.  Both are optional and can be specified
as either a date or date and time in ISO 8601 format, e.g. `YYYY-MM-DD` or
`YYYY-MM-DD HH:MM::SS` (the `T` separating date and time is optional).
Any of the other string formats supported by
[badger-timestamp](https://abw.github.io/badger-timestamp/docs/manual/creating_timestamps.html)
can also be used.

Use the `from` property to render some content after a particular date or
date/time combination.

```jsx
<Sometimes from="2023-01-01 16:20:00">
  This content will only be display on or after 4:20pm on January 1st 2023.
</Sometimes>
```

If you don't specify a time then it is assumed to be `00:00:00`.

```jsx
<Sometimes from="2023-01-01">
  This content will only be display from 2023 onwards.
</Sometimes>
```

Use the `to` property to render some content up to a particular date or
date/time combination.  If you don't specify a time then it is assumed to be
`00:00:00`.  The implication of this is that the content will NOT be rendered
once that date is reached.

```jsx
<Sometimes to="2024-01-01">
  This content will only be displayed before the start of 2024.
</Sometimes>
```

You can specify a time explicitly for the cut-off point.

```jsx
<Sometimes to="2024-01-01 11:59:59">
  This content will NOT be display after noon on the first day of 2024.
</Sometimes>
```

You can specify both `from` and `to`.

```jsx
<Sometimes from="2023-12-01 00:00:00" to="2023-12-31 23:59:59">
  This content will only be displayed in December 2023.
</Sometimes>
```

If you don't specify either `from` or `to` then the content will always be
displayed.  This is a pointless exercise, but it's possible that you might
be defining the `from` and/or `to` constraints somewhere else (e.g. in a
configuration file) where one, either or both could possibly be undefined.
The component will attempt to do the right thing.

Both properties are inclusive.  So the content will be displayed as soon as
the `from` time is reached and up to, and including, the `to` time.  However,
note the warning above that the default time is assumed to be `00:00:00` if
you only specify a date.  So when a date is used as the `to` time the content
will STOP being displayed as soon as that date is reached.

## Wildcard Dates

You can use `*` as a wildcard for the date in either `from` or `to` if you
want to target a particular time range on all days.

For example, to display some content between `09:00:00`  and `17:00:00` every
day:

```jsx
<Sometimes from="* 09:00:00" to="* 17:00:00">
  We're open!  Call us on 555-1234.
</Sometimes>
```

## The `inside` and `outside` Properties

Instead of defining the content you want to display as children of the
component, you can define it using the `inside` property.  The content will
be displayed when the current time is inside the specified range.

```jsx
<Sometimes
  from="2023-12-01 00:00:00"
  to="2023-01-01 11:59:59"
  inside={<DecemberOffers/>}
/>
```

You can also use the `outside` property as the inverse of `inside`.
This content will be displayed when the current time is outside the
specified range.

```jsx
<Sometimes
  from="2022-12-22 17:00:00"
  to="2023-01-04 09:00:00"
  inside={<ClosedForXmas/>}
  outside={<OpeningHours/>}
/>
```

## Author

[Andy Wardley](https://github.com/abw)

