# 🔐 SECURITY WARNING - READ THIS FIRST!

## ⚠️ IMPORTANT: Your `.env` file contains EXPOSED credentials!

The following credentials in your `.env` file have been exposed and need to be **regenerated immediately**:

### 🚨 Actions Required:

1. **Regenerate Supabase Keys:**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Navigate to: Project Settings → API
   - Click "Reset database password" or regenerate anon key
   - Update your `.env` with the new keys

2. **Regenerate Gemini API Key:**
   - Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Revoke the exposed key
   - Generate a new API key
   - Update your `.env` with the new key

3. **Remove `.env` from Git History:**
   ```bash
   # Remove from current tracking (already done in .gitignore)
   git rm --cached .env
   
   # Commit the removal
   git commit -m "Remove .env from repository"
   
   # Push changes
   git push
   ```

4. **Add VITE_STORE_ID:**
   - Get your store ID from Supabase `stores` table
   - Add it to your `.env` file:
   ```
   VITE_STORE_ID=your-actual-store-id
   ```

### ✅ After Completing Above Steps:

1. Test locally: `npm run dev`
2. Build for production: `npm run build`
3. Deploy to Vercel with environment variables set in dashboard

### 📝 Environment Variables Checklist:

- [ ] New `VITE_SUPABASE_URL` set
- [ ] New `VITE_SUPABASE_ANON_KEY` set
- [ ] New `VITE_GEMINI_API_KEY` set
- [ ] `VITE_STORE_ID` added
- [ ] Old credentials revoked
- [ ] `.env` removed from Git
- [ ] Vercel environment variables updated

---

**Never commit `.env` files to version control!**
Use `.env.example` as a template for others.
