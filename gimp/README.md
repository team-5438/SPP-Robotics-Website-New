# What is this?
This folder contains [GIMP](https://gimp.org) image files used for the hero images (and the footer image), before being converted to WebP.

# How to generate hero images (probably not the best method, but whatever)
1. Open the image file you want to use in GIMP.
2. If you get a popup for the color profile, click on "Keep"
3. Edit the image to your liking
4. Go to **File > Save As...** and save the .xcf file to this folder (so other people can edit it easier in the future)
5. Go to **File > Export As...** and save the image as a .png file wherever you'd like
6. In the export window, uncheck EVERY box EXCEPT "Save color profile", then click "Save"
7. Wait for the .png file to save. This can take a few seconds.
8. Open a terminal and run this: (don't enter in the parentheses unless your file name actually contains them)
```bash
cwebp -metadata all -q 80 -o (path of your output .webp file) (path of your .png file)
```
9. You should see something like this:
```
Saving file 'robotics site directory.webp'
File:      robotics site directory.png
Dimension: 3872 x 1410
Output:    405604 bytes Y-U-V-All-PSNR 40.92 44.79 45.70   41.95 dB
           (0.59 bpp)
block count:  intra4:      16787  (77.94%)
              intra16:      4751  (22.06%)
              skipped:        35  (0.16%)
bytes used:  header:            443  (0.1%)
             mode-partition:  69079  (17.0%)
 Residuals bytes  |segment 1|segment 2|segment 3|segment 4|  total
    macroblocks:  |       3%|      12%|      27%|      58%|   21538
      quantizer:  |      27 |      27 |      22 |      16 |
   filter level:  |       8 |      24 |      20 |      27 |
Metadata:
  * ICC profile:     560 bytes
```
10. You're done! You can now copy your resulting .webp file into `site/img/heroes` and use it in `hero.css`.