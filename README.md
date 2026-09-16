# Mock Train Board

A lightweight train board built with vanilla JS that displays train info, refreshing every 2 seconds. Handles gaps in the data (null or missing destination) with a fallback message instead of crashing, and pads countdown minutes with a leading zero (e.g. "03 min").

## Why it handles missing/bad data
Real ATS feeds sometimes drop data or send empty fields. Without a fallback, the UI would crash or display garbage (like "undefined - undefined min"). This board checks for null/empty data first and shows "No live data" instead.

## Live demo
https://anjaly-sivadas.github.io/mock-train-board/

## Tech
HTML, CSS, vanilla JavaScript