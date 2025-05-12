# ClimateCatcher

## Changelog

---

### 2025-05-12: Official Release of ClimateCatcher V1.0.0

* **UI Overhaul**: Fully redesigned user interface.
* **High DPI Support**: Added support for high-DPI displays.
* **Toolbar Redesign**: Introduced new station metadata download feature.

#### Station Data Download Page

* Countries are now color-coded.
* Single-station data download option added.
* Removed bottom notification panel.

#### Station Data Processing Page

* Single-station data query feature added.
* Date range selector enabled.
* Pagination for query results implemented.

#### ERA5 Data Download Page

* Fixed bug preventing ERA5 downloads in some cases; updated to latest CDSAPI commands.
* Translated ERA5 variable names into Chinese and added a searchable dropdown.

#### New: Environmental Monitoring Page

* Download AQI (Air Quality Index) data via an interactive map.

---

### 2025-03-03: Update

* Added "Online Update Check" feature.
* Fixed ERA5 download bug (thanks to m0\_68809110 on CSDN).
* Display station coordinates in queries and export files.
* Automatically download station latitude/longitude file during data download.

---

### 2025-01-20: Update

* Fixed intermittent ERA5 download failures.

---

### 2024-12-11: Update

* Added stop controls for station and ERA5 data downloads.
* Optimized UI of CDSAPI configuration.
* Improved UI of the splash screen.

---

## Core Features

### 1. International Station Data Download

This module downloads meteorological observation data from global weather stations. Data resolution is hourly or tri-hourly; some regions use 6-hour intervals. All timestamps are in UTC, so post-processing should account for time zones (the software does not convert time zones automatically).

![Station Download 1](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747061720534-aa4b1c4d-4356-4227-b985-0d7c9e235435.png)

![Station Download 2](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747061738103-56a55266-4c6b-4319-8f83-4e0b38d42d80.png)

> Data sources: NOAA (no affiliation).

1. Select a country or region and input the start/end years.
2. Click **Start Download**.

![Downloading](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747061799003-bc1fbc8d-beb6-4331-be17-d122b5486306.png)

![Complete](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747061828431-1a0e1f93-9657-4588-9e8b-12209ffa9431.png)

Downloaded files are in the `Download` folder under the application root:

```
Download/
├─ docs/        # Station country info, metadata, format descriptions
└─ *.csv        # Observation data (timestamps in UTC)
```

![Docs Folder](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747061965065-2c71bd2b-3cdd-439c-baee-5c8438f4ce79.png)

### 2. International Station Data Processing

After downloading, go to **Station Data Processing** and click **Update Data**.

![Update Button](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062107157-de28c62e-5a8b-43c8-9aa8-67b2e92ebe53.png)

In the highlighted area, select the date range and station:

![Selection](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062162835-58230c57-d1a8-4fc0-ba5e-daa8c54be4e9.png)

Date range picker:

![Date Range](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062208762-b0407cca-033d-4827-9d66-fb5be9c229cc.png)

Station selector:

![Station Selector](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062224817-9b7b134f-ba44-4618-9979-2691f633fcf3.png)

Click **Query Data** to fetch results. Use **Previous**/**Next** to page through:

![Pagination](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062277598-e2e811a6-d645-4633-a8e8-e2aaa61ce301.png)

Export queried data to CSV or Excel:

![Export Options](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062351538-f7356f93-81dd-4bbb-afc3-159c88a934f9.png)

![Export Dialog](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062365914-ce61e9df-4a27-4af9-a86e-25946a0cc0c2.png)

### 3. ERA5 Data Download

![ERA5 Config](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062511705-e15559ee-6201-4aab-86c8-2214e689f920.png)

Before downloading ERA5 data, configure CDSAPI credentials.

![Configure API](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062524909-19c59bed-052b-420c-9f7a-87d10d08122e.png)

Refer to [How to configure?](https://blog.csdn.net/qq_44907989/article/details/147776332?spm=1011.2415.3001.5331) for guidance.

![Tutorial](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062611697-20fd8e39-f284-4fd0-806d-cfc6f2a9a2c4.png)

Paste your `url` and `key`, then save.

![API Credentials](https://i-blog.csdnimg.cn/direct/7da943e7b4a04eca947e5bc384c655a3.png)

Supported datasets:

* ERA5-Land
* ERA5 Single-Level
* ERA5 Pressure-Level

Frequency options: hourly, daily (with timezone conversion), monthly.

Example: daily ERA5-Land:

![Daily ERA5-Land](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062756112-9325d4be-9cf5-42c3-bfee-ea5270e4d075.png)

> Note: Real-time data is not available from the ERA5 service.

Downloaded files appear as:

![ERA5 Files](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747062847076-893d96b0-730f-4a01-b84f-a431c32b6bb7.png)

### 4. Environmental Monitoring Station Query

This page uses Leaflet to display station locations. Current features:

* Query stations
* Download AQI data

![AQI Map](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747063300894-d599d326-4e18-4b7d-a12d-9f3e6c9a6bf1.png)

Click **Download All Stations** to export AQI data based on the query.

![Download AQI](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747063335614-e009fc39-12b5-4dc8-a4f3-6cc75e48a58b.png)

## Download Link

[https://funnybiscuit613.github.io/ClimateCatcher/](https://funnybiscuit613.github.io/ClimateCatcher/)

![GitHub Pages](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747064116469-33cdca98-a326-44c9-9d02-9abf162da6a3.png)

![Project Homepage](https://cdn.nlark.com/yuque/0/2025/png/56568744/1747064126877-c14f34e3-dabc-4805-bfb7-ecf66b34f82a.png)
