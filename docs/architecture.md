# Architecture Overview

```mermaid
graph TD
  U[User] --> F[React Frontend]
  F --> B[Express Backend]
  B --> D[(Database - Mocked)]
