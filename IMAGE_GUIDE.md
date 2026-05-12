# 🖼️ FloraVision — Image Replacement Guide

## 📁 Where to Put Your Images
All images go inside the `public/images/` folder.

---

## 🗂️ Complete Image Location Map

### 🔵 SECTION BACKGROUNDS (replace these to change page backgrounds)
| File | Used In | Component |
|------|---------|-----------|
| `public/images/hero-bg.jpg` | Hero section background | `HeroBanner.tsx` |
| `public/images/trending-bg.jpg` | "Our Trendy plants" section bg | `TrendingPlants.tsx` |
| `public/images/topsell-bg.jpg` | "Our Top Selling Plants" section bg | `TopSellingPlants.tsx` |
| `public/images/review-bg.jpg` | "Customer Review" section bg | `CustomerReviews.tsx` |
| `public/images/o2-bg.jpg` | "Our Best o2" section bg | `O2Plants.tsx` |
| `public/images/footer-bg.jpg` | Footer section bg | `Footer.tsx` |

> ✅ These backgrounds are already extracted from your Figma design screenshots.
> To update: just replace the file with the same name, or change the url() path in the component.

---

### 🌿 PLANT IMAGES (currently emoji — replace with real PNGs)

#### Hero Section (`HeroBanner.tsx`)
| Image | File to create | Current placeholder |
|-------|---------------|---------------------|
| Main hero plant (center) | `public/images/hero-plant.png` | 🌿 emoji |
| Aglaonema (floating card) | `public/images/aglaonema.png` | 🪴 emoji |

#### Trending Plants (`TrendingPlants.tsx`)
| Image | File to create | Current placeholder |
|-------|---------------|---------------------|
| Desk plant (card 1, white pot) | `public/images/plant-pothos.png` | 🪴 emoji |
| Cactus (card 2, cyan pot) | `public/images/plant-cactus.png` | 🌵 emoji |

#### Top Selling Plants (`TopSellingPlants.tsx`)
| Image | File to create | Current placeholder |
|-------|---------------|---------------------|
| Aglaonema plant | `public/images/plant-aglaonema.png` | 🪴 emoji |
| Plantain Lilies | `public/images/plant-plantain.png` | 🌿 emoji |
| Cactus | `public/images/plant-cactus.png` | 🌵 emoji |
| Swiss cheese Plant | `public/images/plant-swiss.png` | 🍃 emoji |
| Sansevieria plant | `public/images/plant-sansevieria.png` | 🌱 emoji |
| Agave plant | `public/images/plant-agave.png` | 🌾 emoji |

#### O2 Section (`O2Plants.tsx`)
| Image | File to create | Current placeholder |
|-------|---------------|---------------------|
| Featured O2 plant | `public/images/plant-o2-featured.png` | 🪴 emoji |

---

### 👤 AVATARS (Customer Reviews — `CustomerReviews.tsx`)
| Name | File to create | Current placeholder |
|------|---------------|---------------------|
| Ronnie Hamill (hero) | `public/images/avatar-ronnie.jpg` | "RH" initials |
| Shelly Russel | `public/images/avatar-shelly.jpg` | "SR" initials |
| Lula Rolfson | `public/images/avatar-lula.jpg` | "LR" initials |
| Carol Hueis | `public/images/avatar-carol.jpg` | "CH" initials |

---

## 🔄 How to Replace an Emoji with a Real Image

### Step 1: Add your image to `public/images/`
```
public/
  images/
    aglaonema.png   ← put PNG with transparent background here
```

### Step 2: Import Image in the component
```tsx
import Image from 'next/image';
```

### Step 3: Replace the emoji div
**Before (emoji):**
```tsx
<div style={{ fontSize: 64 }}>🪴</div>
```

**After (real image):**
```tsx
<Image
  src="/images/aglaonema.png"
  alt="Aglaonema plant"
  width={140}
  height={140}
  style={{ objectFit: 'contain' }}
/>
```

---

## 💡 Tips
- Use **PNG with transparent background** for plant images (looks best on dark cards)
- Use **JPG** for section backgrounds (smaller file size)
- Recommended plant image size: **300×300px minimum**
- Background images: **1440×800px minimum**
