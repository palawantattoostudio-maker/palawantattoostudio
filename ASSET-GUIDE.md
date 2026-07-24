# Asset Guide — Palawan Tattoo Studio

This guide explains how to update images and content on the website **without touching any code**. Just replace image files with new ones using the same filename.

---

## Table of Contents

1. [How the Gallery Works](#how-the-gallery-works)
2. [Replacing the Hero Image](#1-replacing-the-hero-image)
3. [Replacing Studio Photos](#2-replacing-studio-photos)
4. [Replacing Main Gallery Photos](#3-replacing-main-gallery-photos)
5. [Adding Main Gallery Photos](#4-adding-main-gallery-photos)
6. [Replacing Artist Profile Photos](#5-replacing-artist-profile-photos)
7. [Replacing Individual Artist Gallery Photos](#6-replacing-individual-artist-gallery-photos)
8. [Adding Individual Artist Gallery Photos](#7-adding-individual-artist-gallery-photos)
9. [Replacing Merchandise Photos](#8-replacing-merchandise-photos)
10. [Adding New Merchandise](#9-adding-new-merchandise)
11. [Replacing Achievement Images](#10-replacing-achievement-images)
12. [Adding New Achievements](#11-adding-new-achievements)
13. [Replacing Partner Logos](#12-replacing-partner-logos)

---

## How the Gallery Works

The website has **two separate gallery systems**. It is very important to understand the difference:

### MAIN GALLERY

This is the **general tattoo portfolio** of the entire Palawan Tattoo Studio. It shows the studio's best work as a collective — not separated by artist.

**Visitor flow:**

1. Click **GALLERY** in the navigation.
2. Choose **MAIN GALLERY**.
3. The studio's general tattoo portfolio appears immediately.

**Folder:** `public/assets/gallery/`
**Data file:** `src/data/gallery.json`

### ARTIST GALLERY

This is an **artist directory**. Visitors first choose an artist, then see only that artist's individual tattoo work.

**Visitor flow:**

1. Click **GALLERY** in the navigation.
2. Choose **ARTIST GALLERY**.
3. An **Artist Directory** appears — showing cards for all 7 artists.
4. Click an artist (e.g., Marlon Lim Cinense).
5. Only Marlon's individual gallery opens — no other artist's work is shown.

**Folder:** `public/assets/artist-galleries/[artist-name]/`
**Data file:** `src/data/artistGalleries.json`

### Summary

| Feature | Main Gallery | Artist Gallery |
|---|---|---|
| What it shows | Studio's general portfolio | Individual artist portfolios |
| How it opens | Shows images immediately | Shows artist directory first |
| Folder | `public/assets/gallery/` | `public/assets/artist-galleries/` |
| Data file | `src/data/gallery.json` | `src/data/artistGalleries.json` |
| Separated by artist? | No | Yes |

---

## 1. Replacing the Hero Image

The hero image is the large visual on the homepage.

**File to replace:**
```
public/assets/hero/hero-image.jpg
```

**Instructions:**
1. Create or select a new image (recommended: portrait orientation, high quality).
2. Name it exactly `hero-image.jpg`.
3. Replace the file in `public/assets/hero/`.
4. Refresh the website — the new image appears automatically.

---

## 2. Replacing Studio Photos

Studio photos appear in the "About Our Studio" section.

**Files to replace:**
```
public/assets/studio/studio-01.jpg
public/assets/studio/studio-02.jpg
public/assets/studio/studio-03.jpg
```

**Instructions:**
1. Create or select new studio photos.
2. Name them `studio-01.jpg`, `studio-02.jpg`, `studio-03.jpg`.
3. Replace the files in `public/assets/studio/`.
4. Refresh — new photos appear automatically.

---

## 3. Replacing Main Gallery Photos

**Files to replace:**
```
public/assets/gallery/gallery-01.jpg
public/assets/gallery/gallery-02.jpg
...
public/assets/gallery/gallery-10.jpg
```

**Instructions:**
1. Create or select a new tattoo photo.
2. Name it the same as the file you want to replace (e.g., `gallery-01.jpg`).
3. Replace the file in `public/assets/gallery/`.
4. Refresh — the new image appears automatically.

---

## 4. Adding Main Gallery Photos

To add more than 10 photos to the Main Gallery:

1. Add a new image file to `public/assets/gallery/` (e.g., `gallery-11.jpg`).
2. Open `src/data/gallery.json`.
3. Add a new entry at the end of the list:
```json
{
  "id": 11,
  "image": "/assets/gallery/gallery-11.jpg",
  "title": "Your Title Here",
  "category": "Your Category"
}
```
4. Save the file. The new photo appears in the Main Gallery.

---

## 5. Replacing Artist Profile Photos

Each artist has a profile photo.

**File to replace:**
```
public/assets/artists/[artist-name]/profile.jpg
```

Example for Marlon Lim Cinense:
```
public/assets/artists/marlon-lim-cinense/profile.jpg
```

**Instructions:**
1. Create or select a new profile photo.
2. Name it exactly `profile.jpg`.
3. Replace the file in the artist's folder.
4. Refresh — the new profile photo appears automatically.

**Artist folders:**
- `marlon-lim-cinense`
- `arlong-zapanta`
- `jemuel-ferrer`
- `bryan-cinense`
- `duke`
- `hades-osiris`
- `alyssa-grace-cinense`

---

## 6. Replacing Individual Artist Gallery Photos

Each artist has their own gallery folder with up to 10 tattoo photos.

**File to replace:**
```
public/assets/artist-galleries/[artist-name]/tattoo-01.jpg
```

Example for Marlon:
```
public/assets/artist-galleries/marlon-lim-cinense/tattoo-01.jpg
```

**Instructions:**
1. Create or select a new tattoo photo.
2. Name it the same as the file you want to replace (e.g., `tattoo-01.jpg`).
3. Replace the file in the artist's gallery folder.
4. Refresh — the new image appears in that artist's individual gallery.

**Important:** Replacing a photo in one artist's folder does NOT affect any other artist's gallery.

---

## 7. Adding Individual Artist Gallery Photos

Each artist supports up to 10 tattoo photos. To add a new one:

1. Add a new image file to the artist's gallery folder (e.g., `tattoo-11.jpg` — but note the current max is 10 per the data file).
2. Open `src/data/artistGalleries.json`.
3. Find the artist's section (e.g., `"marlon-lim-cinense"`).
4. Add a new entry:
```json
{
  "image": "/assets/artist-galleries/marlon-lim-cinense/tattoo-11.jpg",
  "title": "Tattoo Work 11"
}
```
5. Save the file. The new photo appears in that artist's gallery.

---

## 8. Replacing Merchandise Photos

Each shirt has a front and back image.

**Files to replace:**
```
public/assets/merchandise/shirt-01/front.png
public/assets/merchandise/shirt-01/back.png
```

**Instructions:**
1. Create or select a new shirt image.
2. Name it `front.png` or `back.png`.
3. Replace the file in the shirt's folder.
4. Refresh — the new shirt image appears automatically.

---

## 9. Adding New Merchandise

To add a 9th shirt:

1. Create a new folder: `public/assets/merchandise/shirt-09/`.
2. Add `front.png` and `back.png` inside it.
3. Open `src/data/merchandise.json`.
4. Add a new entry:
```json
{
  "id": "shirt-09",
  "name": "Your Shirt Name",
  "description": "Your description here.",
  "price": "₱800",
  "front": "/assets/merchandise/shirt-09/front.png",
  "back": "/assets/merchandise/shirt-09/back.png"
}
```
5. Save the file. The new shirt appears in the merchandise section.

---

## 10. Replacing Achievement Images

**Files to replace:**
```
public/assets/achievements/achievement-01.jpg
public/assets/achievements/achievement-02.jpg
...
```

**Instructions:**
1. Create or select a new achievement photo (certificate, trophy, event photo, etc.).
2. Name it the same as the file you want to replace.
3. Replace the file in `public/assets/achievements/`.
4. Refresh — the new image appears automatically.

---

## 11. Adding New Achievements

1. Add a new image file to `public/assets/achievements/` (e.g., `achievement-08.jpg`).
2. Open `src/data/achievements.json`.
3. Add a new entry:
```json
{
  "id": 8,
  "artist": "Artist Name",
  "artistId": "artist-id-here",
  "competition": "Competition Name",
  "year": "2024",
  "location": "Location",
  "category": "Category",
  "placement": "1st Place",
  "award": "Award Title",
  "image": "/assets/achievements/achievement-08.jpg"
}
```
4. Save the file. The new achievement appears in the Achievements section.

---

## 12. Replacing Partner Logos

**Files to replace:**
```
public/assets/partners/partner-01.png
public/assets/partners/partner-02.png
public/assets/partners/partner-03.png
public/assets/partners/partner-04.png
```

**Instructions:**
1. Create or select a new partner logo (PNG with transparent background recommended).
2. Name it the same as the file you want to replace.
3. Replace the file in `public/assets/partners/`.
4. Refresh — the new logo appears automatically.

To add a 5th partner, add `partner-05.png` and add an entry in `src/data/partners.json`.

---

## Logo

The studio logo is located at:
```
public/assets/logo/MADKID_PTS_LOGO.png
```

Replace this file to update the logo across the entire website (navbar and footer).

---

## Tips

- Always use the **exact same filename** when replacing images.
- Recommended formats: `.jpg` for photos, `.png` for logos and graphics with transparency.
- Keep image file sizes reasonable (under 2MB per image) for fast loading.
- After replacing any file, just refresh the browser — no code changes needed.
