# insta-logger

## Description

insta-logger is a lightweight logging package for Instatus API integration. It provides an easy-to-use interface for logging and create events.

## Installation

To install insta-logger, simply run the following command:

```bash
npm install insta-logger
```

## Usage

To use insta-logger in your project, import it as follows:

```javascript
import { InstaLog } from "insta-logger";
```

Then, you can start creating and listing events using the provided methods:

1. **Initialize the logger with your access token**:

```javascript
const logger = new InstaLog("access_token");
```

2. **Creating event**:

```javascript
await logger.createEvent({ ...event }); // The event data as specified by the Event interface
```

3. **Listing Events**:

```javascript
const events = await logger.listEvents({ ...filters }); // The optional filters, to filter the returned events as you want
```
