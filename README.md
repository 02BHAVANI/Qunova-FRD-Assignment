# Market Insights Dashboard

A full-stack application for distributors to view market insights of top products.

## Features
- Product filtering by region and month
- Responsive card-based UI
- .NET Core Web API backend
- Angular frontend

## Technologies
- Angular 17
- .NET 8
- ASP.NET Core Web API
- RxJS
- TypeScript

## Setup

### Backend (API)
1. Navigate to `MarketInsights.API` folder
2. Run `dotnet restore`
3. Run `dotnet run`

### Frontend (Angular)
1. Navigate to `market-insights` folder
2. Run `npm install`
3. Run `ng serve`

## API Endpoints
- `GET /api/Product` - Get all products
- `GET /api/Product?region={region}&month={month}` - Filter products
