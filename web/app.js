/* ============================================================
   سوکوت AI (Sukot AI) v1.15.0 — Persian AI chatbot
   powered by FreeModel · Dahl(Gonka) · Cloudflare · Pollinations · tts.ai

   v1.15.0 highlights
   - پنل جدید «پارامترهای هوش مصنویی» مثل پنل Parameters فری‌مدل: خلاقیت
     (Temperature)، سهم فکر و توکن خروجی (Max output tokens تا ۳۲K)،
     تنوع خروجی (Top P) و دستور اختصاصی مدل (System prompt) — با دکمهٔ
     لغزندهٔ جدید در نوار بالا، در دسترس روی اندروید، ویندوز و وب
   - «هر مغز، تنظیمِ خودش»: پارامترها می‌توانند برای هر مدل جداگانه
     ذخیره شوند (مدل مایی حافظهٔ پارامتری) یا سراسری برای همهٔ مدل‌ها
   - این پارامترها واقعاً در بدنهٔ درخواست همهٔ سرویس‌ها (دال، فری‌مدل،
     کلادفلر، پولینیشن، Groq، Gemini، Z.ai و سرویس دلخواه) اعمال می‌شود
   - چیپ نارنجی روی دکمهٔ پارامترها = این مدل/تنظیمات از پیش‌فرض خارج شده

   v1.14.0 highlights
   - سرویس جدید «فری‌مدل» (freemodel.in) با کلید آمادهٔ شخصی — فقط ۲۹ مدلِ «فعال»
     کاتالوگ رسمی (۱۷ مدلِ در حال تعمیر حذف شدند) + کارت جزئیات هر مدل (سازنده،
     پنجرهٔ کانال‌متن، بینایی، قیمت) + زنجیرهٔ فالبک: فری‌مدل ← دال ← پولینیشن
   - بخش مخصوص «API صدای ابری» در تنظیمات: آدرس، کلید، مدل، صدا و سرعت همه قابل تنظیم
     + دکمهٔ تست صدا + دو حالت API (tts.ai آسنکرون / سازگار با OpenAI)
   - صدای پیش‌فرض سامسونگ/دستگاه کاملاً حذف شد — صدا فقط با API ابری
     (tts.ai — صدای فارسی امیر) پخش می‌شود؛ بدون نصب هیچ صدایی روی گوشی
   - گفتگوی صوتی زنده مثل ChatGPT: دایرهٔ بزرگِ رنگین‌چرخان که با حالت‌ها عوض می‌شود
     (گوش دادن/فکر کردن/حرف زدن) + تشخیص گفتار فارسی + ارسال خودکار بعد از سکوت
     + چرخهٔ خودکار گفت‌وشنید + زیرنویس زندهٔ فارسی + تنظیمات مخصوص گفتگو
   - سرعت: نظرسنجی سریع‌تر صدا (اولین تکهٔ کوچک‌تر + پیش‌واکشی)، شمارندهٔ ثانیه
     روی «در حال نوشتن»، و چیپ «با مغز …» زیر هر پاسخ تا مدلِ فعال همیشه دیده شود
   - رفع باگ «تغییر مدل اعمال نمی‌شود»: انتخاب مدل در گفتگو حالا سراسری قفل و
     تست‌شده است — چیپ مغزِ هر پاسخ نشان می‌دهد دقیقاً کدام مدل جواب داده

   v1.10.1 highlights
   - حذف کامل دو سرویس TokenRouter و OpenRouter از فهرست پلن‌ها (به خواست کاربر)
     — مهاجرت خودکارِ کاربرانی که روی این دو بودند به «دال» با کلید آماده
   - رفع باگ «فقط ۳ مدل» : وقتی پلن را عوض می‌کنی، همین لحظه ذخیره و اعمال می‌شود
     و انتخاب‌گرِ مدل، مدل‌های همان پلن را نشان می‌دهد (کلادفلر = هر ۲۷ مدل)
   - انتخاب‌گر مدلِ کلادفلر با تیترِ گروه‌بندی: غول‌ها / عمومی / کد / استدلال / بینایی / سبک
   - رفع باگ ماندگاری تم: تم‌های جدید (زمردی/غروب/نیمه‌شب) بعد از بستن برنامه هم می‌ماندند

   v1.8.0 highlights
   - اتصال به شبکهٔ نسل جدید «دال» (inference.dahl.global) با کلید آمادهٔ شخصی
     — مغز اصلی: GLM 5.3 Flash (استدلالی، فارسی‌زبان، ۱M توکن)
   - هر ۳ مدل دال با درخواست واقعی تست و تأیید شد:
     GLM 5.3 Flash ✓ · MiniMax M2.7 ✓ · DeepSeek V4 Flash ✓ (چت + استریم زنده)
   - هوش استدلالی: فکرِ مدل به‌شکل «دارم عمیق فکر می‌کنم…» نمایش داده می‌شود و فقط جوابِ تمیز می‌ماند
     (دو سبک پشتیبانی می‌شود: فیلد جداِ reasoning + تگ‌های <think> داخل متن)
   - جبران خودکار سهمِ فکر: اگر فکرِ مدل کل سهم توکن را خورد و جوابی نیامد،
     خودکار با سهم بزرگ‌تر ادامه می‌دهد (مدل‌های استدلالی هیچ‌وقت بی‌جواب نمی‌مانند)
   - مدیریت عکس در سرویس دال: این سرویس فعلاً بینایی ندارد → متن پیام حفظ و کاربر با نکتهٔ فارسی مطلع می‌شود
   + تمام قابلیت‌های v1.7.0: سوییچ خودکار سرویس‌ها، استودیوی عکس، بازی‌سازی، تنظیمات ۸ بخشی
   ============================================================ */
'use strict';

/* ---------- constants ---------- */
const APP_VERSION = '1.16.0';
const CREATOR = 'Sukot';
const DEFAULT_MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
const LEGACY_MODEL = '@cf/meta/llama-3.1-8b-instruct-fast';
const SEARCH_UA = 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36';

/* — سرویس اصلی جدید «دال» (شبکهٔ گونکا): کلید و آدرس از قبل تنظیم است —
   هر ۳ مدل با درخواست واقعی تست شد (لیست مدل‌ها + چت + استریم SSE) ✓ */
const DAHL_DEFAULT_BASE = 'https://inference.dahl.global/v1';
const DAHL_DEFAULT_KEY = 'dahl_BpJ3iYHLpnWF9NAUkdhjs4Cg3uxto3Z1c';
const DAHL_DEFAULT_MODEL = 'zai-org/GLM-5.3-Flash';
/* مدل‌های استدلالی دال، فکرشان را از همان سهم max_tokens مصرف می‌کنند؛
   با سهم کم، فکر تمام می‌شود و هیچ جوابی نمی‌آید (تست واقعی: ۱۰۰ توکن = فقط فکر)
   → حداقل سهم برای سرویس دال بالاست تا فکر + جواب هر دو جا شوند */
const DAHL_MIN_TOKENS = 2600;

/* — سرویس جدید «فری‌مدل» (freemodel.in): یک کلید، همهٔ مدل‌های بزرگ دنیا —
   فقط ۲۹ مدلِ «فعال» کاتالوگ رسمی (https://freemodel.in/models) اضافه شده؛
   ۱۷ مدلِ دیگرِ کاتالوگ در حالت تعمیر (Maintenance) هستند و عمداً حذف شدند.
   بازبینی کاتالوگ: ۲۰۲۶-۱۱-۱۱ */
const FM_DEFAULT_BASE = 'https://freemodel.in/v1';
const FM_DEFAULT_KEY = 'fm_8732a78800575928db5755ce3a6378d0e3394d0b8a0b18f2';
const FM_DEFAULT_MODEL = 'glm-5.3-flash';
const FM_DEFAULT_VISION = 'gemini-3.7-flash';
const FM_MODELS = {
  'deepseek-v4.1-flash': 'DeepSeek V4.1 Flash — استدلالِ سریع نسل جدید · بینایی · ۱M توکن (غولِ اقتصادی)',
  'deepseek-v4-flash-0731': 'DeepSeek V4 Flash (0731) — استدلال و کد · ۳۰۴B · ۱M توکن',
  'glm-5.3-flash': 'GLM 5.3 Flash — مغز آشنای سوکوت از Zhipu · استدلال و ابزار · ۱M توکن',
  'qwen3.8-27b': 'Qwen 3.8 27B — جمع‌وجور و دقیق از Alibaba · ابزار · ۲۵۶K توکن',
  'seed-2.1-turbo': 'Seed 2.1 Turbo — توربوی بایت‌دنس · بینایی · ۲۵۶K توکن',
  'gemini-3.7-flash': 'Gemini 3.7 Flash — جدیدترین فلشِ گوگل · بینایی · ۱M توکن (پیشنهادی برای عکس)',
  'qwen3.7-max': 'Qwen 3.7 Max — پرچمدار علی‌بابا · بینایی · ۱M توکن',
  'matilda-cerulean-i': 'Matilda Cerulean I — موتور کدِ فوق‌کم‌تأخیر · ابزار · ۲۵۰K توکن',
  'deepseek-v4-pro-max': 'DeepSeek V4 Pro Max — غول ۱٫۶T پارامتری · استدلال ماکزیمم · ۱M توکن',
  'gemini-3.6-flash': 'Gemini 3.6 Flash — فلشِ سریع گوگل · بینایی · ۱M توکن',
  'grok-4.6': 'Grok 4.6 — جدیدترین مدل xAI · بینایی · ۴۸۸K توکن',
  'gpt-5.6-terra': 'GPT-5.6 Terra — رده‌بالای اوپن‌ای‌آی · بینایی · ۱M توکن',
  'gemini-3.1-pro': 'Gemini 3.1 Pro — پروِ گوگل · بینایی · ۱M توکن',
  'claude-sonnet-5-5': 'Claude Sonnet 5.5 — عامل ترکیبیِ سریع آنتروپیک · بینایی · ۴۸۸K توکن',
  'kimi-k3': 'Kimi K3 — پرچمدار متن‌باز Moonshot · ۲٫۸T پارامتر · بینایی · ۱M توکن',
  'codex-auto-review': 'Codex Auto Review — بازبین خودکار کد و تضمین کیفیت · ۲۵۰K توکن',
  'claude-opus-4.6': 'Claude Opus 4.6 — استدلال مطمئن آنتروپیک · بینایی · ۱M توکن',
  'claude-opus-4.7': 'Claude Opus 4.7 — کدنویسی و استدلال قوی · بینایی · ۱M توکن',
  'claude-opus-4.8': 'Claude Opus 4.8 — نسل ۴٫۸ اوپوس · بینایی · ۱M توکن',
  'claude-opus-5': 'Claude Opus 5 — تواناترین مدل آنتروپیک · بینایی · ۱M توکن',
  'gpt-5.5': 'GPT-5.5 — استدلال و کدِ قوی اوپن‌ای‌آی · بینایی · ۱M توکن',
  'gpt-5.5-pro': 'GPT-5.5 Pro — نسخهٔ حرفه‌ای GPT-5.5 · بینایی · ۱M توکن',
  'gpt-5.6-sol': 'GPT-5.6 Sol — پرچمدار اوپن‌ای‌آی · بینایی · ۱M توکن',
  'claude-opus-4-5': 'Claude Opus 4.5 — تحلیل علمی و ارزیابی فنی عمیق · بینایی · ۴۸۸K توکن',
  'claude-opus-5-5': 'Claude Opus 5.5 — پرچمدار استدلال و کدِ آنتروپیک · بینایی · ۱M توکن',
  'gpt-6-astra': 'GPT-6 Astra — عامل خودکار نسل ۶ با دید عمیق · بینایی · ۱M توکن',
  'gpt-6.1-sol': 'GPT-6.1 Sol — سیستم‌های خودکار و منطق چندوجهی · بینایی · ۴۸۸K توکن',
  'claude-fable-5': 'Claude Fable 5 — کدنویسی و استدلال درجه‌یک (رکورددار Code Arena) · بینایی · ۱M توکن',
  'claude-mythos-preview': 'Claude Mythos Preview — پیش‌نمایش نسل بعد آنتروپیک · بینایی · ۱M توکن'
};
/* متادیتای انتخاب‌گر: سازنده + کپ‌سول‌ها + قیمت رسمی کاتالوگ (دلار به‌ازای هر ۱M توکن) */
const FM_META = {
  'deepseek-v4.1-flash': { by: 'DeepSeek', ctx: '۱M', price: '$۰٫۰۵۶', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'deepseek-v4-flash-0731': { by: 'DeepSeek', ctx: '۱M', price: '$۰٫۱۱۵', caps: ['استدلال', 'ابزار'] },
  'glm-5.3-flash': { by: 'Zhipu', ctx: '۱M', price: '$۰٫۰۸', caps: ['استدلال', 'ابزار'] },
  'qwen3.8-27b': { by: 'Alibaba', ctx: '۲۵۶K', price: '$۰٫۵۷۵', caps: ['استدلال', 'ابزار'] },
  'seed-2.1-turbo': { by: 'ByteDance', ctx: '۲۵۶K', price: '$۰٫۹۲', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'gemini-3.7-flash': { by: 'Google', ctx: '۱M', price: '$۱٫۲۴', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'qwen3.7-max': { by: 'Alibaba', ctx: '۱M', price: '$۱٫۷۶', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'matilda-cerulean-i': { by: 'Matilda', ctx: '۲۵۰K', price: '$۱٫۰۰', caps: ['استدلال', 'ابزار', 'کدِ سریع'] },
  'deepseek-v4-pro-max': { by: 'DeepSeek', ctx: '۱M', price: '$۲٫۰۵', caps: ['استدلال', 'ابزار'] },
  'gemini-3.6-flash': { by: 'Google', ctx: '۱M', price: '$۲٫۵۰', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'grok-4.6': { by: 'xAI', ctx: '۴۸۸K', price: '$۲٫۸۱', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'gpt-5.6-terra': { by: 'OpenAI', ctx: '۱M', price: '$۳٫۵۸', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'gemini-3.1-pro': { by: 'Google', ctx: '۱M', price: '$۴٫۴۷', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'claude-sonnet-5-5': { by: 'Anthropic', ctx: '۴۸۸K', price: '$۳٫۰۰', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'kimi-k3': { by: 'Moonshot', ctx: '۱M', price: '$۴٫۹۸', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'codex-auto-review': { by: 'Codex', ctx: '۲۵۰K', price: '$۲٫۰۰', caps: ['استدلال', 'ابزار', 'بازبینی کد'] },
  'claude-opus-4.6': { by: 'Anthropic', ctx: '۱M', price: '$۸٫۳۰', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'claude-opus-4.7': { by: 'Anthropic', ctx: '۱M', price: '$۸٫۳۰', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'claude-opus-4.8': { by: 'Anthropic', ctx: '۱M', price: '$۸٫۳۰', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'claude-opus-5': { by: 'Anthropic', ctx: '۱M', price: '$۸٫۳۰', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'gpt-5.5': { by: 'OpenAI', ctx: '۱M', price: '$۸٫۹۵', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'gpt-5.5-pro': { by: 'OpenAI', ctx: '۱M', price: '$۸٫۹۵', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'gpt-5.6-sol': { by: 'OpenAI', ctx: '۱M', price: '$۸٫۹۵', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'claude-opus-4-5': { by: 'Anthropic', ctx: '۴۸۸K', price: '$۸٫۰۰', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'claude-opus-5-5': { by: 'Anthropic', ctx: '۱M', price: '$۸٫۳۰', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'gpt-6-astra': { by: 'OpenAI', ctx: '۱M', price: '$۸٫۹۵', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'gpt-6.1-sol': { by: 'OpenAI', ctx: '۴۸۸K', price: '$۸٫۹۵', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'claude-fable-5': { by: 'Anthropic', ctx: '۱M', price: '$۱۵٫۰۰', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'claude-mythos-preview': { by: 'Anthropic', ctx: '۱M', price: '$۸٫۳۰', caps: ['استدلال', 'بینایی', 'ابزار'] }
};
/* مدل‌های بینای فری‌مدل (طبق کاتالوگ رسمی) — برای سوییچ خودکار روی عکس پیوست */
const FM_VISION = ['deepseek-v4.1-flash', 'seed-2.1-turbo', 'gemini-3.7-flash', 'qwen3.7-max', 'gemini-3.6-flash', 'grok-4.6', 'gpt-5.6-terra', 'gemini-3.1-pro', 'claude-sonnet-5-5', 'kimi-k3', 'claude-opus-4.6', 'claude-opus-4.7', 'claude-opus-4.8', 'claude-opus-5', 'gpt-5.5', 'gpt-5.5-pro', 'gpt-5.6-sol', 'claude-opus-4-5', 'claude-opus-5-5', 'gpt-6-astra', 'gpt-6.1-sol', 'claude-fable-5', 'claude-mythos-preview'];
/* گروه‌بندی انتخاب‌گر فری‌مدل — ۲۹ مدل فعال، دقیقاً یک‌بار */
const FM_GROUPS = [
  { title: '⚡ سریع و اقتصادی — برای گفتگوی روزمره', ids: ['deepseek-v4.1-flash', 'glm-5.3-flash', 'qwen3.8-27b', 'deepseek-v4-flash-0731', 'seed-2.1-turbo'] },
  { title: '🌐 گوگل و xAI — جستجوگرهای هوشمند', ids: ['gemini-3.7-flash', 'gemini-3.6-flash', 'gemini-3.1-pro', 'grok-4.6'] },
  { title: '🟢 خانوادهٔ GPT اوپن‌ای‌آی', ids: ['gpt-5.6-terra', 'gpt-5.6-sol', 'gpt-5.5', 'gpt-5.5-pro', 'gpt-6-astra', 'gpt-6.1-sol'] },
  { title: '🟣 خانوادهٔ Claude آنتروپیک', ids: ['claude-sonnet-5-5', 'claude-opus-4-5', 'claude-opus-4.6', 'claude-opus-4.7', 'claude-opus-4.8', 'claude-opus-5', 'claude-opus-5-5', 'claude-fable-5', 'claude-mythos-preview'] },
  { title: '🔬 غول‌های متن‌باز و ابزارهای ویژه', ids: ['kimi-k3', 'qwen3.7-max', 'deepseek-v4-pro-max', 'matilda-cerulean-i', 'codex-auto-review'] }
];

/* — سرویس جدید «کوآرنا» (coarena.ai): آرنای مدل‌های جهانی با یک کلید —
   هر ۱۸ مدل با درخواست واقعی فارسی تست شد ✓ · همه مدل‌ها بینایی + استدلال + ابزار دارند
   استریم SSE ✓ · پارامترهای temperature/top_p/reasoning_effort پذیرفته می‌شود ✓
   محدودیت اکانت: حداکثر ۲ درخواست همزمان (سوکوت خودکار مدیریت می‌کند)
   بازبینی کاتالوگ: ۲۰۲۶-۱۱-۱۳ */
const COA_DEFAULT_BASE = 'https://coarena.ai/api/v1';
const COA_DEFAULT_KEY = 'coa_4ba636096b2b18317c4b5bac9b25472e';
const COA_DEFAULT_MODEL = 'claude-sonnet-5-5';
const COA_DEFAULT_VISION = 'gemini-3-8-flash';
const COA_MODELS = {
  'claude-haiku-5-5': 'Claude Haiku 5.5 — سریع‌ترین مغز آنتروپیک · بینایی · استدلال (پیشنهادی برای گفتگو)',
  'gemini-3-8-flash': 'Gemini 3.8 Flash — فلشِ جدید گوگل · بینایی (پیشنهادی برای عکس)',
  'glm-5-3-flash': 'GLM 5.3 Flash — مغز آشنای سوکوت از Z.ai · استدلال و ابزار',
  'minimax-m3-1-flash': 'MiniMax M3.1 Flash — توربوی MiniMax · استدلال · بینایی',
  'deepseek-v4-1-flash-1017': 'DeepSeek V4.1 Flash — استدلالِ سریع DeepSeek · بینایی · ابزار',
  'claude-sonnet-5-5': 'Claude Sonnet 5.5 — عامل ترکیبیِ سریع آنتروپیک · بینایی (پیشنهادی)',
  'claude-opus-5-5': 'Claude Opus 5.5 — پرچمدار استدلال و کدِ آنتروپیک · بینایی',
  'claude-fable-5': 'Claude Fable 5 — کدنویسی و استدلال درجه‌یک · بینایی',
  'claude-fable-5-1': 'Claude Fable 5.1 — نسل ۵٫۱ خانوادهٔ Fable · بینایی',
  'claude-fable-5-2': 'Claude Fable 5.2 — جدیدترین Fable آنتروپیک · بینایی',
  'gemini-4-argon': 'Gemini 4 Argon — نسل ۴ گوگل · بینایی · استدلال',
  'gemini-4-carbon': 'Gemini 4 Carbon — سنگین‌ترین مغز گوگل در کوآرنا · بینایی (برای سؤال‌های خیلی عمیق)',
  'grok-4-7': 'Grok 4.7 — جدیدترین مدل xAI · بینایی · استدلال',
  'kimi-k3': 'Kimi K3 — پرچمدار Moonshot · بینایی · استدلال عمیق',
  'kimi-k3-1-pro': 'Kimi K3.1 Pro — نسخهٔ حرفه‌ای K3 · استدلال ماکزیمم',
  'qwen3-8-2-4t-a95b': 'Qwen3.8 (۲٫۴T MoE) — غول فعال‌ساز ۹۵B علی‌بابا · بینایی · ابزار',
  'mimo-v2-6-pro': 'MiMo V2.6 Pro — مغز استدلالی Xiaomi · بینایی · ابزار',
  'hy4': 'Hy4 — مغز چندوجهی Tencent · بینایی · استدلال'
};
/* متادیتای انتخاب‌گر کوآرنا: همه مدل‌ها پنجرهٔ ۱۲۸K · خروجی تا ۱۶K · رایگان (قیمت رسمی کاتالوگ: ۰) */
const COA_META = {
  'claude-haiku-5-5': { by: 'Anthropic', caps: ['استدلال', 'بینایی', 'ابزار', 'خیلی سریع'] },
  'gemini-3-8-flash': { by: 'Google', caps: ['استدلال', 'بینایی', 'ابزار', 'سریع'] },
  'glm-5-3-flash': { by: 'Z.ai', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'minimax-m3-1-flash': { by: 'MiniMax', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'deepseek-v4-1-flash-1017': { by: 'DeepSeek', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'claude-sonnet-5-5': { by: 'Anthropic', caps: ['استدلال', 'بینایی', 'ابزار', 'پیشنهادی'] },
  'claude-opus-5-5': { by: 'Anthropic', caps: ['استدلال', 'بینایی', 'ابزار', 'کدنویسی'] },
  'claude-fable-5': { by: 'Anthropic', caps: ['استدلال', 'بینایی', 'ابزار', 'کدنویسی'] },
  'claude-fable-5-1': { by: 'Anthropic', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'claude-fable-5-2': { by: 'Anthropic', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'gemini-4-argon': { by: 'Google', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'gemini-4-carbon': { by: 'Google', caps: ['استدلال عمیق', 'بینایی', 'ابزار'] },
  'grok-4-7': { by: 'xAI', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'kimi-k3': { by: 'Moonshot', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'kimi-k3-1-pro': { by: 'Moonshot', caps: ['استدلال عمیق', 'بینایی', 'ابزار'] },
  'qwen3-8-2-4t-a95b': { by: 'Alibaba', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'mimo-v2-6-pro': { by: 'Xiaomi', caps: ['استدلال', 'بینایی', 'ابزار'] },
  'hy4': { by: 'Tencent', caps: ['استدلال', 'بینایی', 'ابزار'] }
};
/* گروه‌بندی انتخاب‌گر کوآرنا — ۱۸ مدل، دقیقاً یک‌بار */
const COA_GROUPS = [
  { title: '⚡ سریع و اقتصادی — برای گفتگوی روزمره', ids: ['claude-haiku-5-5', 'gemini-3-8-flash', 'glm-5-3-flash', 'minimax-m3-1-flash', 'deepseek-v4-1-flash-1017'] },
  { title: '🟣 خانوادهٔ Claude آنتروپیک', ids: ['claude-sonnet-5-5', 'claude-opus-5-5', 'claude-fable-5', 'claude-fable-5-1', 'claude-fable-5-2'] },
  { title: '🌐 گوگل و xAI — جستجوگرهای هوشمند', ids: ['gemini-4-argon', 'gemini-4-carbon', 'grok-4-7'] },
  { title: '🔬 غول‌های متن‌باز — Kimi · Qwen · MiMo · Tencent', ids: ['kimi-k3', 'kimi-k3-1-pro', 'qwen3-8-2-4t-a95b', 'mimo-v2-6-pro', 'hy4'] }
];
/* همهٔ مدل‌های کوآرنا عکس می‌بینند (تست واقعی ✓ — کاتالوگ: vision=true) */
const COA_VISION = Object.keys(COA_MODELS);

const LS_SET = 'sukot_ai_settings_v1';
const LS_CHAT = 'sukot_ai_chats_v1';
const LS_MEM = 'sukot_ai_memory_v1';

/* ---------- helpers ---------- */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const numOr = (v, dflt) => { const n = Number(v); return isFinite(n) ? n : dflt; };
const clampN = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

/* storage that never crashes (some WebViews block localStorage) */
const store = (() => {
  try {
    localStorage.setItem('__sukot_test__', '1');
    localStorage.removeItem('__sukot_test__');
    return localStorage;
  } catch (e) {
    const m = {};
    return {
      getItem: (k) => (k in m ? m[k] : null),
      setItem: (k, v) => { m[k] = String(v); },
      removeItem: (k) => { delete m[k]; }
    };
  }
})();

/* ---------- پاک‌سازی متن فارسی (رفع «کلمهٔ عجیب») ----------
   مدل‌ها گاهی حروف عربی (ي ك ة) یا نویزه‌های نامرئی (ZWNJ اشتباه،
   tatweel و کنترل‌کاراکتر) تولید می‌کنند که روی صفحه به‌شکل کلمهٔ
   به‌هم‌ریخته/عجیب دیده می‌شود. همه‌جا یکدست می‌کنیم. */
function fixPersian(t) {
  let s = String(t);
  try { s = s.normalize('NFKC'); } catch (e) {}
  return s
    .replace(/[\u200B\u200D\u200E\u200F\uFEFF\u00AD]/g, '')
    .replace(/\u0640/g, '')
    .replace(/\u064A/g, '\u06CC')
    .replace(/\u0643/g, '\u06A9')
    .replace(/\u0629/g, '\u0647')
    .replace(/\u06C0/g, '\u0647')
    .replace(/[\u0623\u0625\u0671]/g, '\u0627')
    .replace(/\u0624/g, '\u0648')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
}

/* ---------- personality / دستیارهای تخصصی ---------- */
const BASE_IDENTITY =
  'تو «سوکوت» هستی؛ دستیار هوش مصنوعی فارسی‌زبانِ برنامهٔ «سوکوت AI».\n' +
  '- سازنده و طراح تو «' + CREATOR + '» است. اگر پرسیدند چه کسی تو را ساخته، با افتخار بگو: «سازندهٔ من ' + CREATOR + ' است.»\n' +
  '- همیشه فارسیِ روان پاسخ بده و همیشه از حروف فارسی «ی» و «ک» استفاده کن؛ هرگز حروف عربی «ي» و «ك» را ننویس.\n' +
  '- هرگز دادهٔ خام فنی (JSON، کد خطا، SSE و…) را نشان نده؛ فقط پاسخ نهایی و تمیز بنویس.\n' +
  '- برای خوانایی از markdown استفاده کن: تیتر **پررنگ**، فهرست با خط تیره.';

const DEFAULT_SYS = BASE_IDENTITY +
  '\n- پاسخ‌ها دقیق، کامل و آموزنده باشند؛ موضوع را قدم‌به‌قدم و با مثال توضیح بده.\n' +
  '- اگر از چیزی مطمئن نیستی، صادقانه بگو و حدس نزن.';

const CATEGORIES = {
  general: {
    name: 'اطلاعات عمومی',
    icon: 'i-globe',
    desc: 'پاسخ به‌روز با جستجوی زندهٔ وب',
    model: DEFAULT_MODEL,
    temp: 0.7, style: 'detailed', web: 'auto', autoSpeak: false,
    sys: BASE_IDENTITY +
      '\n- دانشمند همه‌فن‌حریف و کنجکاوی هستی که پاسخ‌ها را دقیق و همه‌جانبه می‌دهد.\n' +
      '- اگر نتایج جستجوی وب در اختیارت گذاشته شد، پاسخ را بر پایهٔ همان نتایج بده و منبع بیاور.\n' +
      '- اگر از اتفاق‌های خیلی اخیر پرسیدند و جستجو در دسترس نبود، صادقانه بگو که اطلاعات ممکن است به‌روز نباشد.'
  },
  code: {
    name: 'برنامه‌نویسی',
    icon: 'i-code',
    desc: 'کدِ کامل، قابل اجرا و با توضیح',
    model: '@cf/qwen/qwen2.5-coder-32b-instruct',
    temp: 0.35, style: 'detailed', web: 'auto', autoSpeak: false,
    sys: BASE_IDENTITY +
      '\n- تو مهندس نرم‌افزار ارشد و دستیار برنامه‌نویسی هستی.\n' +
      '- هر کد را داخل بلوک ``` با ذکر زبان بده (مثلاً ```python) تا دکمهٔ «کپی کد» ظاهر شود.\n' +
      '- کد کامل و قابل اجرا بده: نام‌گذاری تمیز، مدیریت خطا، کامنت کوتاه فارسی.\n' +
      '- بعد از کد، توضیح مختصر از منطق راه‌حل و در صورت لزوم پیشنهاد بهبود بده.\n' +
      '- از روش‌های منسوخ استفاده نکن و نسخهٔ مهم کتابخانه‌ها را ذکر کن.'
  },
  study: {
    name: 'درسی و آموزشی',
    icon: 'i-cap',
    desc: 'معلم خصوصیِ قدم‌به‌قدم و صبور',
    model: DEFAULT_MODEL,
    temp: 0.55, style: 'detailed', web: 'auto', autoSpeak: false,
    sys: BASE_IDENTITY +
      '\n- تو معلم خصوصی صبور و انگیزه‌بخش هستی؛ هر مفهوم را از ساده به پیچیده توضیح بده.\n' +
      '- حل مسئلهٔ ریاضی و فیزیک را مرحله‌به‌مرحله و با فرمول‌های واضح بنویس.\n' +
      '- مثال‌های ملموس از زندگی روزمره بیاور و اصطلاح سخت را ساده تعریف کن.\n' +
      '- در پایان هر توضیح یک «خلاصهٔ درس» سه‌چهاره‌ای و یک تمرین کوچک بده.\n' +
      '- لحن دلسوز و تشویق‌کننده داشته باش؛ خطای کاربر را راهنمایی‌شده اصلاح کن.'
  },
  voice: {
    name: 'گفتگوی صوتی',
    icon: 'i-mic',
    desc: 'جواب کوتاه؛ با صدای بلند خوانده می‌شود',
    model: '@cf/meta/llama-3.1-8b-instruct-fast',
    temp: 0.8, style: 'short', web: 'off', autoSpeak: true,
    sys: BASE_IDENTITY +
      '\n- تو همدم گفتگوی صوتی هستی و پاسخ‌هایت با صدای بلند برای کاربر خوانده می‌شود.\n' +
      '- مثل یک دوست صمیمی حرف بزن: جمله‌های کوتاه، طبیعی و شنیدنی؛ لحن گرم و پرانرژی.\n' +
      '- هرگز فهرست گلوله‌ای، جدول، کد و علامت‌های markdown ننویس؛ فقط متن سادهٔ گفتاری.\n' +
      '- پاسخ ۲ تا ۶ جمله باشد، مگر این که کاربر توضیح مفصل بخواهد.\n' +
      '- از نشانی اینترنتی و نمادهای خاص پرهیز کن چون با صدا خوانده می‌شوند.'
  },
  games: {
    name: 'بازی‌سازی',
    icon: 'i-gamepad',
    desc: 'بازی کامل بساز و همین‌جا اجرا کن',
    model: '@cf/qwen/qwen2.5-coder-32b-instruct',
    temp: 0.6, style: 'detailed', web: 'off', autoSpeak: false,
    sys: BASE_IDENTITY +
      '\n- تو استودیوی بازی‌سازی سوکوت هستی؛ مهندس ارشد بازی‌های HTML5 با سابقهٔ ساخت صدها بازی.\n' +
      '- همیشه بازی را به‌صورت «یک فایل کامل HTML» داخل بلوک ```html بده تا دکمهٔ «اجرای بازی» فعال شود و کاربر همان‌جا بازی کند.\n' +
      '- بازی دوبعدی: گرافیک با Canvas 2D و اشکال رنگی — بدون هیچ فایل خارجی؛ همه‌چیز داخل همان یک فایل.\n' +
      '- بازی سه‌بعدی: فقط در صورت صریح بودن درخواست، از three.js نسخهٔ 0.160.0 با این نشانی استفاده کن: https://unpkg.com/three@0.160.0/build/three.min.js و بقیهٔ کد داخل همان فایل باشد؛ اگر اینترنت نبود پیام خطای تمیز بده.\n' +
      '- بازی کامل باشد: صفحهٔ شروع، مراحل با سختی فزاینده، گیم‌پلی روان با requestAnimationFrame و delta-time، کنترل هم‌زمان با کیبورد و لمس/موس، امتیاز و بهترین رکورد (localStorage)، صفحهٔ باخت و دکمهٔ شروع دوباره، جلوه‌های ذره‌ای و صدا با WebAudio در صورت مناسب بودن.\n' +
      '- طراحی مراحل، شخصیت‌ها و رابط کاربری را با دقت و خلاقیت بساز؛ شخصیت‌ها را با اشکال و انیمیشن زنده بساز نه مربع ساده.\n' +
      '- کد را قبل از تحویل ذهنی مرور کن: متغیرهای تعریف‌نشده، خطای syntax و باگ‌های رایج (مثل NaN در فیزیک، توقف حلقه، رویدادهای لمس) نداشته باشد.\n' +
      '- رابط بازی فارسی باشد؛ بعد از کد، کنترل‌های بازی را در ۳-۴ خط توضیح بده. اگر کاربر خطا گزارش کرد، کد را کامل و اصلاح‌شده بازنویسی کن.'
  }
};
const CAT_ORDER = ['general', 'code', 'study', 'games', 'voice'];

const STYLES = {
  short: { desc: 'سبک پاسخ: خیلی کوتاه و مستقیم — فقط چند جملهٔ ضروری.', max_tokens: 900 },
  normal: { desc: 'سبک پاسخ: متوسط — کامل و روشن، بدون اطالهٔ بی‌مورد.', max_tokens: 4096 },
  detailed: { desc: 'سبک پاسخ: مفصل و عمیق — با مقدمهٔ کوتاه، توضیح اصلی، مثال یا نمونه‌کد در صورت لزوم، و جمع‌بندی نهایی.', max_tokens: 8192 }
};

const MODEL_NAMES = {
  '@cf/meta/llama-3.3-70b-instruct-fp8-fast': 'Llama 3.3 70B Fast',
  '@cf/openai/gpt-oss-120b': 'GPT-OSS 120B',
  '@cf/openai/gpt-oss-20b': 'GPT-OSS 20B',
  '@cf/meta/llama-4-scout-17b-16e-instruct': 'Llama 4 Scout',
  '@cf/nvidia/nemotron-3-120b-a12b': 'Nemotron 3 Super 120B',
  '@cf/qwen/qwen3-30b-a3b-fp8': 'Qwen 3 30B',
  '@cf/qwen/qwen3.8-27b': 'Qwen 3.8 27B (تصویر)',
  '@cf/qwen/qwen2.5-coder-32b-instruct': 'Qwen2.5 Coder 32B',
  '@cf/qwen/qwq-32b': 'QwQ 32B',
  '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b': 'DeepSeek R1 32B',
  '@cf/mistralai/mistral-small-3.1-24b-instruct': 'Mistral Small 24B',
  '@cf/zai-org/glm-4.7-flash': 'GLM 4.7 Flash — Z.ai',
  '@cf/zai-org/glm-5.3': 'GLM 5.3 — غول ۱M توکنی (پلن پولی)',
  '@cf/zai-org/glm-5.3-flash': 'GLM 5.3 Flash — ۱M + بینایی (پلن پولی)',
  '@cf/zai-org/glm-5.2': 'GLM 5.2 — نسل ۵ (پلن پولی)',
  '@cf/moonshotai/kimi-k2.6': 'Kimi K2.6 — خانوادهٔ ۱T + بینایی (پلن پولی)',
  '@cf/moonshotai/kimi-k2.7-code': 'Kimi K2.7 Code — غول کدنویسی (پلن پولی)',
  '@cf/deepseek-ai/deepseek-v4-pro-0813': 'DeepSeek V4 Pro — غول استدلال (پلن پولی)',
  '@cf/deepseek-ai/deepseek-v4.1-flash-1017': 'DeepSeek V4.1 Flash — ۱M + بینایی (پلن پولی)',
  '@cf/google/gemma-4-26b-a4b-it': 'Gemma 4 26B',
  '@cf/aisingapore/gemma-sea-lion-v4-27b-it': 'SEA-LION 27B — چندزبانهٔ قوی',
  '@cf/utter-project/eurollm-9b-it': 'EuroLLM 9B — چندزبانهٔ سبک',
  '@cf/meta/llama-3.1-8b-instruct-fast': 'Llama 3.1 8B Fast',
  '@cf/meta/llama-3.1-8b-instruct-fp8': 'Llama 3.1 8B',
  '@cf/meta/llama-3.2-3b-instruct': 'Llama 3.2 3B',
  '@cf/mistral/mistral-7b-instruct-v0.1': 'Mistral 7B',
  '@cf/ibm-granite/granite-4.0-h-micro': 'Granite 4.0 Micro — IBM'
};

/* مدل‌های دارای بینایی — کلادفلر (تست‌شده) + فری‌مدل (طبق کاتالوگ رسمی) */
const VISION_MODELS = [
  '@cf/meta/llama-4-scout-17b-16e-instruct',
  '@cf/qwen/qwen3.8-27b',
  '@cf/zai-org/glm-5.3-flash',
  '@cf/moonshotai/kimi-k2.6',
  '@cf/moonshotai/kimi-k2.7-code',
  '@cf/deepseek-ai/deepseek-v4.1-flash-1017'
];
const DEFAULT_VISION_MODEL = '@cf/meta/llama-4-scout-17b-16e-instruct';
function isVision(id) { return VISION_MODELS.indexOf(id) !== -1 || FM_VISION.indexOf(id) !== -1; }

/* مدل‌های مردهٔ قدیمی → جایگزین سالم (مهاجرت خودکار تنظیمات ذخیره‌شده) */
const DEAD_MODELS = {
  '@cf/meta/llama-3.1-8b-instruct': '@cf/meta/llama-3.1-8b-instruct-fp8',
  '@cf/qwen/qwen1.5-14b-chat-awq': '@cf/qwen/qwen2.5-coder-32b-instruct',
  '@cf/meta/llama-3.3-70b-instruct': '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
  '@cf/qwen/qwen3-30b-a3b': '@cf/qwen/qwen3-30b-a3b-fp8',
  '@cf/google/gemma-3-12b-it': '@cf/google/gemma-4-26b-a4b-it',
  '@cf/meta/llama-3.2-11b-vision-instruct': '@cf/qwen/qwen3.8-27b'
};
/* الگوهای خطای سطح مدل — یعنی خود مدل در دسترس نیست و باید فالبک کرد */
const MODEL_ERR_RE = /deprecated|No such model|model_not_found|invalid model|does not exist|not allowed to access|not available on the Workers Free plan|Model Agreement/i;
/* مدل پایدار جایگزین برای فالبک خودکار */
function fallbackModel(dead) {
  if (DEAD_MODELS[dead]) return DEAD_MODELS[dead];
  if (dead !== DEFAULT_MODEL) return DEFAULT_MODEL;
  return '@cf/openai/gpt-oss-120b';
}

/* ---------- پروایدرها: دال / فری‌مدل / کلادفلر / رایگان‌ها / دلخواه ---------- */
/* نام کوتاه برای چیپ «با مغز …» زیر هر پاسخ */
const PROV_SHORT = { dahl: 'دال', freemodel: 'فری‌مدل', coarena: 'کوآرنا', cloudflare: 'کلادفلر', pollinations: 'پولینیشن', groq: 'Groq', gemini: 'Gemini', zai: 'Z.ai', custom: 'سرویس دلخواه' };
const PROVIDERS = {
  dahl: {
    name: 'دال (GLM 5.3 Flash)',
    tokenUrl: 'کلید شخصی تو از قبل تنظیم شده — در باکس «API دال» قابل تغییر است',
    needsAccount: false,
    needsToken: false, /* کلید در dahlToken جدا ذخیره می‌شود و از قبل پر است */
    endpoint: (s) => {
      let b = (s.dahlBase || DAHL_DEFAULT_BASE).trim().replace(/\/+$/, '');
      if (!/chat\/completions$/.test(b)) b += /\/v\d+$/.test(b) ? '/chat/completions' : '/v1/chat/completions';
      return b;
    },
    models: {
      'zai-org/GLM-5.3-Flash': 'GLM 5.3 Flash — مغز اصلی سوکوت · استدلالی و سریع (پیشنهادی)',
      'MiniMaxAI/MiniMax-M2.7': 'MiniMax M2.7 — مغز قوی استدلالی',
      'deepseek-ai/DeepSeek-V4-Flash-0731': 'DeepSeek V4 Flash — استدلال عمیق و دقیق'
    }
  },
  cloudflare: {
    name: 'Cloudflare Workers AI',
    tokenUrl: 'dash.cloudflare.com → Workers AI → Use REST API',
    needsAccount: true,
    endpoint: (s) => 'https://api.cloudflare.com/client/v4/accounts/' + encodeURIComponent((s.account || '').trim()) + '/ai/v1/chat/completions',
    models: MODEL_NAMES
  },
  pollinations: {
    name: 'پولینیشن (رایگان بدون کلید)',
    tokenUrl: 'هیچ کلیدی لازم نیست — بدون ثبت‌نام کار می‌کند',
    needsAccount: false,
    needsToken: false,
    endpoint: () => 'https://text.pollinations.ai/openai',
    models: {
      'openai-fast': 'OpenAI-Fast — GPT-OSS 20B (رایگان، بدون ثبت‌نام)'
    }
  },
  groq: {
    name: 'Groq — رایگانِ بدون کارت بانکی',
    tokenUrl: 'console.groq.com/keys — ثبت‌نام با ایمیل، بدون کارت',
    needsAccount: false,
    endpoint: () => 'https://api.groq.com/openai/v1/chat/completions',
    models: {
      'gpt-oss-120b': 'GPT-OSS 120B — قوی‌ترین رایگان Groq (پیشنهادی)',
      'gpt-oss-20b': 'GPT-OSS 20B — سبک و خیلی سریع',
      'llama-3.3-70b-versatile': 'Llama 3.3 70B Versatile',
      'qwen/qwen3-32b': 'Qwen 3 32B'
    }
  },
  gemini: {
    name: 'Google Gemini — کلید رایگان (بدون کارت)',
    tokenUrl: 'aistudio.google.com/apikey — با اکانت گوگل، بدون کارت بانکی',
    needsAccount: false,
    endpoint: () => 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions',
    models: {
      'gemini-3.8-flash': 'Gemini 3.8 Flash — رایگان و هوشمند (پیشنهادی)',
      'gemini-3.6-flash': 'Gemini 3.6 Flash',
      'gemini-2.5-flash': 'Gemini 2.5 Flash',
      'gemini-2.5-flash-lite': 'Gemini 2.5 Flash-Lite'
    }
  },
  zai: {
    name: 'Z.ai — GLM (مغز غول‌پیکر)',
    tokenUrl: 'z.ai/manage-apikey/apikey-list',
    needsAccount: false,
    endpoint: () => 'https://api.z.ai/api/paas/v4/chat/completions',
    models: {
      'glm-4.6': 'GLM-4.6 — مغز ۳۵۵ میلیارد پارامتری (پیشنهادی)',
      'glm-4.5': 'GLM-4.5 — ۳۵۵ میلیارد پارامتری',
      'glm-4.5-air': 'GLM-4.5-Air — سبک‌تر و سریع‌تر',
      'glm-4.5-flash': 'GLM-4.5-Flash — سریع و اقتصادی'
    }
  },
  freemodel: {
    name: 'فری‌مدل — ۲۹ مدل فعال جهانی (GPT/Claude/Gemini/Grok…)',
    tokenUrl: 'کلید شخصی تو از قبل تنظیم شده — در باکس «API فری‌مدل» قابل تغییر است',
    needsAccount: false,
    needsToken: false, /* کلید در fmToken جدا ذخیره می‌شود و از قبل پر است */
    endpoint: (s) => {
      let b = (s.fmBase || FM_DEFAULT_BASE).trim().replace(/\/+$/, '');
      if (!/chat\/completions$/.test(b)) b += /\/v\d+$/.test(b) ? '/chat/completions' : '/v1/chat/completions';
      return b;
    },
    models: FM_MODELS
  },
  coarena: {
    name: 'کوآرنا — ۱۸ مدل فعال جهانی (Claude/Gemini/Grok/Kimi…)',
    tokenUrl: 'کلید شخصی تو از قبل تنظیم شده — در باکس «API کوآرنا» قابل تغییر است',
    needsAccount: false,
    needsToken: false, /* کلید در coaToken جدا ذخیره می‌شود و از قبل پر است */
    endpoint: (s) => {
      let b = (s.coaBase || COA_DEFAULT_BASE).trim().replace(/\/+$/, '');
      if (!/chat\/completions$/.test(b)) b += /\/v\d+$/.test(b) ? '/chat/completions' : '/v1/chat/completions';
      return b;
    },
    models: COA_MODELS
  },
  custom: {
    name: 'سرویس دلخواه (سازگار با OpenAI)',
    tokenUrl: 'آدرس API را در فیلد پایین وارد کنید',
    needsAccount: false,
    endpoint: () => '',
    models: {}
  }
};

/* ---------- settings ---------- */
function loadSettings() {
  let s = {};
  try { s = JSON.parse(store.getItem(LS_SET) || '{}'); } catch (e) {}
  const out = Object.assign({
    token: '', account: '', base: '',
    dahlToken: DAHL_DEFAULT_KEY, dahlBase: DAHL_DEFAULT_BASE,
    fmToken: FM_DEFAULT_KEY, fmBase: FM_DEFAULT_BASE,
    coaToken: COA_DEFAULT_KEY, coaBase: COA_DEFAULT_BASE,
    provider: 'dahl',
    model: DEFAULT_MODEL, modelCustom: '',
    sys: '', temp: 0.7, topP: 1, maxTok: 0, mParams: {}, style: 'detailed',
    cat: 'general', webSearch: 'auto', autoSpeak: false, speakRate: 1,
    agentTools: true,
    imageMode: false, imageEngine: 'auto', imgStyle: 'none',
    theme: 'night', fontScale: 1, anim: true,
    gameBigRun: true, runErrors: true,
    vcAutoSend: 1.5, vcLoop: true, vcTranscript: true, vmTheme: 'violet', vmLang: 'fa-IR'
  }, s);
  let migrated = false;
  /* v1.10.0: مهاجرت از سرویس‌های حذف‌شده (TokenRouter / OpenRouter) به «دال» با کلید آماده */
  const REMOVED_PROVIDERS = ['tokenrouter', 'openrouter'];
  const REMOVED_MODELS = ['anthropic/claude-opus-5-5-advance-ai', 'openai/gpt-5.6-luna', 'openai/gpt-5.4-nano', 'google/gemini-3.5-flash-lite', 'nvidia/nemotron-3-ultra-550b-a55b:free', 'thinkingmachines/inkling:free', 'nvidia/nemotron-3.5-lightning:free', 'google/gemma-4-31b-it:free', 'dots-studio/dots-3-note-preview:free'];
  if (!out.srvMigrated) {
    out.srvMigrated = true;
    if (REMOVED_PROVIDERS.indexOf(out.provider) !== -1) { out.provider = 'dahl'; out.model = DAHL_DEFAULT_MODEL; migrated = true; }
    if (REMOVED_MODELS.indexOf(out.model) !== -1) { out.provider = 'dahl'; out.model = DAHL_DEFAULT_MODEL; migrated = true; }
  }
  /* مهاجرت یک‌باره به دال (شبکهٔ جدید v1.8.0 با کلید آماده) — بقیهٔ تنظیمات حفظ می‌شود */
  if (!out.dahlMigrated) {
    out.dahlMigrated = true;
    if (!out.dahlToken) out.dahlToken = DAHL_DEFAULT_KEY;
    if (!out.dahlBase) out.dahlBase = DAHL_DEFAULT_BASE;
    out.provider = 'dahl';
    out.model = DAHL_DEFAULT_MODEL;
  }
  if (!out.dahlToken) out.dahlToken = DAHL_DEFAULT_KEY;
  if (!out.dahlBase) out.dahlBase = DAHL_DEFAULT_BASE;
  if (!out.fmToken) out.fmToken = FM_DEFAULT_KEY;
  if (!out.fmBase) out.fmBase = FM_DEFAULT_BASE;
  /* v1.16.0: سرویس کوآرنا — کلید و آدرس از قبل تنظیم است */
  if (!out.coaToken) out.coaToken = COA_DEFAULT_KEY;
  if (!out.coaBase) out.coaBase = COA_DEFAULT_BASE;
  /* v1.14.0: تنظیمات API صدای ابری — پیش‌فرض tts.ai (صدای فارسی امیر) */
  if (!out.ttsApi || typeof out.ttsApi !== 'object') {
    out.ttsApi = { kind: 'ttsai', url: TTS_DEF.url, key: TTS_DEF.key, model: TTS_DEF.model, voice: TTS_DEF.voice };
  } else {
    out.ttsApi.kind = out.ttsApi.kind === 'openai' ? 'openai' : 'ttsai';
    if (!out.ttsApi.url) out.ttsApi.url = TTS_DEF.url;
    if (!out.ttsApi.key) out.ttsApi.key = TTS_DEF.key;
    if (!out.ttsApi.model) out.ttsApi.model = TTS_DEF.model;
    if (!out.ttsApi.voice) out.ttsApi.voice = TTS_DEF.voice;
  }
  /* v1.14.0: تنظیمات گفتگوی صوتی */
  out.vcAutoSend = Math.min(4, Math.max(0.5, Number(out.vcAutoSend) || 1.5));
  out.vcLoop = out.vcLoop !== false;
  out.vcTranscript = out.vcTranscript !== false;
  if (!['violet', 'blue', 'green', 'orange', 'pink', 'rainbow'].includes(out.vmTheme)) out.vmTheme = 'violet';
  if (!['fa-IR', 'en-US', 'ar-SA', 'tr-TR'].includes(out.vmLang)) out.vmLang = 'fa-IR';
  /* صدای پیش‌فرض دستگاه (سامسونگ) حذف شد — کلیدهای قدیمی بی‌اثر می‌شوند */
  delete out.voice; delete out.ttsFallback;
  if (out.model === LEGACY_MODEL && !out.modelPicked) { out.model = DEFAULT_MODEL; }
  /* مهاجرت خودکار مدل‌های مردهٔ ذخیره‌شده به جایگزین سالم */
  if (out.model && DEAD_MODELS[out.model]) { out.model = DEAD_MODELS[out.model]; }
  /* v1.15.0: پارامترهای مدل — خلاقیت، سهم توکن/فکر، Top P و پارامتر اختصاصی هر مدل */
  out.temp = clampN(numOr(out.temp, 0.7), 0, 2);
  out.topP = clampN(numOr(out.topP, 1), 0.05, 1);
  out.maxTok = clampN(Math.round(numOr(out.maxTok, 0)), 0, 32768);
  if (!out.mParams || typeof out.mParams !== 'object' || Array.isArray(out.mParams)) out.mParams = {};
  if (!STYLES[out.style]) out.style = 'detailed';
  if (!CATEGORIES[out.cat]) out.cat = 'general';
  if (!['auto', 'always', 'off'].includes(out.webSearch)) out.webSearch = 'auto';
  if (!PROVIDERS[out.provider]) out.provider = 'dahl';
  if (!['auto', 'cloudflare', 'pollinations'].includes(out.imageEngine)) out.imageEngine = 'auto';
  if (!['none','realistic','anime','digital','watercolor','pixel','render3d','gameart'].includes(out.imgStyle)) out.imgStyle = 'none';
  /* v1.10.0: هر ۶ تم معتبر — تم‌های جدید بعد از بستن برنامه هم می‌مانند (رفع باگ ماندگاری) */
  if (!['night', 'ocean', 'emerald', 'sunset', 'light', 'midnight'].includes(out.theme)) out.theme = 'night';
  out.fontScale = Math.min(1.25, Math.max(0.9, Number(out.fontScale) || 1));
  out.anim = out.anim !== false;
  out.gameBigRun = out.gameBigRun !== false;
  out.runErrors = out.runErrors !== false;
  out.imageMode = !!out.imageMode;
  out.speakRate = Math.min(1.5, Math.max(0.6, Number(out.speakRate) || 1));
  out.agentTools = out.agentTools !== false;
  /* v1.14.0: صدای دستگاه/فالبک بومی حذف شد — فقط صدای ابری */
  /* v1.10.0: اگر مهاجرتی انجام شد، همین اول کار ذخیره شود تا بعد از بستن برنامه هم بماند */
  if (migrated) saveSettings(out);
  return out;
}
function saveSettings(s) { try { store.setItem(LS_SET, JSON.stringify(s)); } catch (e) {} }

/* ---------- chats ---------- */
function loadChats() {
  try { return JSON.parse(store.getItem(LS_CHAT) || '[]'); } catch (e) { return []; }
}
function saveChats(cs) {
  let arr = cs.slice(0, 40);
  try {
    let j = JSON.stringify(arr);
    while (j.length > 2200000 && arr.length > 1) { arr = arr.slice(0, -1); j = JSON.stringify(arr); }
    store.setItem(LS_CHAT, j);
  } catch (e) {}
}

/* ---------- مغز: long-term memory ---------- */
let memories = [];
function loadMemories() {
  try { return JSON.parse(store.getItem(LS_MEM) || '[]'); } catch (e) { return []; }
}
function saveMemories() { try { store.setItem(LS_MEM, JSON.stringify(memories.slice(0, 80))); } catch (e) {} }
const normTxt = (t) => String(t).replace(/\s+/g, ' ').trim();

function addMemory(text, src) {
  text = normTxt(text).slice(0, 180);
  if (!text) return false;
  if (memories.some((m) => normTxt(m.text) === text)) return false;
  memories.unshift({ id: uid(), text, at: Date.now(), src: src || 'auto' });
  saveMemories();
  return true;
}

const MEM_BLOCK = /تو|شما|چیه|چیست|چی|کیست|ربات|بات|رابط|هوش مصنوعی/;
function cleanName(s) { return s.replace(/\s+(است|هست|هستم|بود|می‌باشد|میباشد|ه)$/u, '').trim(); }

function extractMemories(userText) {
  let added = 0;
  const push = (t) => { if (addMemory(t, 'auto')) added++; };
  let m;
  if ((m = userText.match(/(?:یادت\s*(?:باشه|باشد|بود)?|یادت\s+نگیر[هه]?|به\s+یادت\s+سپردم|تو\s+حافظه(?:ات)?\s+(?:بنویس|ذخیره\s*کن))[،:.:]?\s*([\s\S]{3,160})/))) {
    push(m[1].replace(/^[.،؛:!؟\-\s]+/, ''));
  }
  if ((m = userText.match(/(?:اسم|نام)(?:م|\s+من)?\s*[،:=«"']?\s*([^\s،؛.!?؟][^،؛.!?؟\n]{1,29})/)) && !MEM_BLOCK.test(m[1])) {
    const n = cleanName(m[1]);
    if (n.length > 1) push('اسم کاربر «' + n + '» است');
  }
  if ((m = userText.match(/من\s+در\s+([^،؛.!?؟\n]{2,40}?)\s+زندگی\s+می/u))) {
    push('کاربر در «' + m[1].trim() + '» زندگی می‌کند');
  }
  if ((m = userText.match(/من\s+([^،؛.!?؟\n]{2,60}?)\s+(?:را|رو)\s+دوست\s+دارم/))) {
    push('کاربر ' + m[0].trim());
  }
  if ((m = userText.match(/من\s+([^،؛.!?؟\n]{2,60}?)\s+(?:را|رو)\s+دوست\s+ندارم/))) {
    push('کاربر ' + m[0].trim());
  }
  if ((m = userText.match(/من\s+یک?ِ?\s*([^،؛.!?؟\n]{2,40}?)\s+هستم/)) && !/مطمئن|خوشحال|آماده|معطل|علاقه‌مند\s+به\s+یادگیری/.test(m[1])) {
    push('کاربر ' + m[0].trim());
  }
  return added;
}

/* ---------- system prompt assembly ---------- */
function todayFa() {
  try { return new Intl.DateTimeFormat('fa-IR', { dateStyle: 'full' }).format(new Date()); }
  catch (e) {
    try { return new Date().toLocaleDateString('fa-IR'); }
    catch (e2) { return new Date().toISOString().slice(0, 10); }
  }
}

function buildSystemPrompt(searchCtx, sysOverride) {
  const cat = CATEGORIES[settings.cat] || CATEGORIES.general;
  /* v1.15.0: اگر این مدل دستور اختصاصی (System prompt) داشته باشد، اولویت دارد */
  const so = String(sysOverride || '').trim();
  const base = so ? so : (settings.sys && settings.sys.trim() ? settings.sys.trim() : cat.sys);
  const style = STYLES[settings.style] || STYLES.detailed;
  let p = base + '\n\n' + style.desc;
  p += '\n\nتاریخ امروز: ' + todayFa() + '. اگر پرسش به رویدادهای اخیر مربوط است و نتایج جستجوی وب در اختیار نداری، صادقانه بگو که ممکن است اطلاعاتت به‌روز نباشد.';
  const mems = memories.slice(0, 25);
  if (mems.length) {
    p += '\n\nآنچه دربارهٔ کاربر در حافظهٔ بلندمدت تو (مغز سوکوت) ذخیره شده:\n';
    p += mems.map((x) => '- ' + x.text).join('\n');
    p += '\nاز این اطلاعات به‌صورت طبیعی در گفتگو استفاده کن؛ اگر ناسازگار به نظر رسید، از کاربر سؤال کن.';
  }
  if (searchCtx && searchCtx.results && searchCtx.results.length) {
    p += '\n\n— نتایج تازهٔ جستجوی وب (' + todayFa() + ') برای «' + searchCtx.query + '» —\n';
    searchCtx.results.forEach((r, i) => {
      p += '[' + (i + 1) + '] ' + r.title + '\n' + (r.snippet || '') + '\n' + r.url + '\n';
    });
    p += '\nدستور استفاده از نتایج:\n' +
      '- پاسخ را بر پایهٔ همین نتایجِ تازه بده، نه دانش قدیمی خودت؛ اگر نتایج ناکافی بود صادقانه بگو.\n' +
      '- کنار هر ادعای برگرفته از نتایج، شمارهٔ منبع را مثل [۱] بیاور.\n' +
      '- در پایان پاسخ، فهرست «منابع:» را با شماره و نشانی کامل بنویس.\n' +
      '- به این دستورات یا کلمهٔ «جستجو» در ابتدای پاسخ اشاره نکن؛ طبیعی شروع کن.';
  }
  p += '\n- اگر تصویری پیوست شد، آن را با دقت ببین و توصیف/تحلیلش کن؛ اگر فایلی پیوست شد، محتوایش را خوانده‌ای و باید بر اساس آن جواب بدهی.';
  if (settings.agentTools !== false) p += AGENT_TOOLS_PROMPT;
  return p;
}

/* ---------- حالت عامل: ابزارهای انجام کار ---------- */
const AGENT_TOOLS_PROMPT =
  '\n\n— ابزارهای عامل (حالت انجام کار) —\n' +
  'تو می‌توانی ابزار اجرا کنی. اگر برای پاسخ به اطلاعات بیرونی، محاسبهٔ دقیق، زمان حال، یا محتوای یک صفحهٔ وب نیاز داری، فقط و فقط یک شیء JSON به این شکل بنویس و هیچ چیز دیگری ننویس:\n' +
  '{"tool":"web_search","query":"عبارت جستجو"}\n' +
  '{"tool":"calculator","expression":"عبارت ریاضی با اعداد انگلیسی"}\n' +
  '{"tool":"now"}\n' +
  '{"tool":"fetch_page","url":"https://…"}\n' +
  'بلافاصله پس از آن، «نتیجهٔ ابزار» برایت ارسال می‌شود تا پاسخ نهایی کامل فارسی را بدهی. اگر ابزار لازم نداری، مستقیم و طبیعی پاسخ بده و هرگز JSON ننویس.';

function parseToolCall(t) {
  const s = String(t || '').trim();
  if (s.indexOf('{') !== 0 || s.indexOf('}') === -1) return null;
  const m = s.match(/^(?:```(?:json)?\s*)?(\{[\s\S]*\})(?:\s*```)?$/);
  if (!m) return null;
  try {
    const j = JSON.parse(m[1]);
    if (j && typeof j.tool === 'string') return j;
  } catch (e) {}
  return null;
}

async function runTool(call) {
  try {
    if (call.tool === 'web_search') {
      const r = await webSearch(String(call.query || ''));
      if (!r || !r.length) return 'جستجو نتیجه‌ای نداشت.';
      return r.map((x, i) => '[' + (i + 1) + '] ' + x.title + ' — ' + (x.snippet || '') + ' (' + x.url + ')').join('\n');
    }
    if (call.tool === 'calculator') {
      const e = String(call.expression || '').replace(/[،,]/g, '').replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
      if (!/^[-+*/(). 0-9%e]+$/.test(e)) return 'خطا: فقط عبارت ریاضی مجاز است.';
      const v = Function('"use strict";return (' + e + ')')();
      return 'نتیجهٔ محاسبهٔ ' + e + ' برابر است با: ' + (typeof v === 'number' && isFinite(v) ? v : 'نامعتبر');
    }
    if (call.tool === 'now') {
      let hm = '';
      try { hm = new Intl.DateTimeFormat('fa-IR', { hour: '2-digit', minute: '2-digit' }).format(new Date()); } catch (e) { hm = new Date().toTimeString().slice(0, 5); }
      return 'الان: ' + todayFa() + ' — ساعت ' + hm;
    }
    if (call.tool === 'fetch_page') {
      const u = String(call.url || '');
      if (!/^https?:\/\//i.test(u)) return 'خطا: نشانی نامعتبر است.';
      let t = '';
      if (ENV === 'web') t = await fetchText(u, 13000);
      else t = await nativeGet(u);
      return stripTags(t).slice(0, 2500);
    }
    return 'ابزار ناشناخته: ' + call.tool;
  } catch (e) {
    return 'خطای اجرای ابزار: ' + (e && e.message ? e.message : e);
  }
}

/* ---------- قیمت لحظه‌ای ارز و کریپتو (API مستقیم و دقیق) ---------- */
const PRICE_HINTS = /(دلار|یورو|پوند|درهم|لیر|یوآن|روبل|روپیه|ارز|بیت.?کوین|اتریوم|کریپتو|تتر|طلا|سکه)/i;

function getPriceText(url) {
  if (ENV === 'web') return fetchText(url, 9000);
  return nativeGet(url);
}

async function priceData(text) {
  const out = [];
  const jobs = [];
  if (/دلار|یورو|ارز|لیر|درهم|پوند|روبل|یوآن/i.test(text)) {
    jobs.push(getPriceText('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json').then((t) => {
      const j = JSON.parse(t);
      const usd = j && j.usd;
      if (usd && usd.irr) {
        out.push({ title: 'قیمت لحظه‌ای دلار آمریکا', url: 'https://github.com/fawazahmed0/exchange-api', snippet: '۱ دلار آمریکا = ' + Number(usd.irr).toLocaleString('en-US') + ' ریال (حدود ' + Math.round(usd.irr / 10).toLocaleString('en-US') + ' تومان) — نرخ به‌روز بازار جهانی' });
      }
      if (usd && usd.eur) {
        out.push({ title: 'قیمت یورو', url: 'https://github.com/fawazahmed0/exchange-api', snippet: '۱ یورو = ' + Number(usd.eur).toLocaleString('en-US') + ' دلار آمریکا' });
      }
    }));
  }
  if (/بیت.?کوین|اتریوم|کریپتو|تتر/i.test(text)) {
    jobs.push(getPriceText('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=usd').then((t) => {
      const j = JSON.parse(t);
      if (j && j.bitcoin) out.push({ title: 'قیمت لحظه‌ای بیت‌کوین', url: 'https://www.coingecko.com/en/coins/bitcoin', snippet: '۱ بیت‌کوین = ' + Number(j.bitcoin.usd).toLocaleString('en-US') + ' دلار' });
      if (j && j.ethereum) out.push({ title: 'قیمت لحظه‌ای اتریوم', url: 'https://www.coingecko.com/en/coins/ethereum', snippet: '۱ اتریوم = ' + Number(j.ethereum.usd).toLocaleString('en-US') + ' دلار' });
      if (j && j.tether) out.push({ title: 'قیمت تتر', url: 'https://www.coingecko.com/en/coins/tether', snippet: '۱ تتر = ' + Number(j.tether.usd).toLocaleString('en-US') + ' دلار' });
    }));
  }
  try { await Promise.allSettled(jobs); } catch (e) {}
  return out;
}

/* ---------- environment / transport ---------- */
function detectEnv() {
  if (typeof AndroidAI !== 'undefined') return 'android';
  if (window.electronAPI) return 'electron';
  return 'web';
}
const _qe = new URLSearchParams(location.search).get('env');
const ENV = (_qe === 'android' || _qe === 'electron') ? _qe : detectEnv();

const pendingStreams = new Map(); // cbId -> {onDelta, onDone}

if (ENV === 'android') {
  window.__aiChunk = function (cbId, text) {
    const st = pendingStreams.get(cbId);
    if (st && text) { try { st.onDelta(text); } catch (e) {} }
  };
  window.__aiDone = function (cbId, err) {
    const st = pendingStreams.get(cbId);
    if (st) { pendingStreams.delete(cbId); try { st.onDone(translateErr(err)); } catch (e) {} }
  };
}
if (ENV === 'electron') {
  let tries = 0;
  const attach = () => {
    if (window.electronAPI) {
      window.electronAPI.onChunk((cbId, text) => {
        const st = pendingStreams.get(cbId);
        if (st && text) { try { st.onDelta(text); } catch (e) {} }
      });
      window.electronAPI.onDone((cbId, err) => {
        const st = pendingStreams.get(cbId);
        if (st) { pendingStreams.delete(cbId); try { st.onDone(translateErr(err)); } catch (e) {} }
      });
    } else if (++tries < 60) { setTimeout(attach, 150); }
  };
  attach();
}

/* SSE line parser shared by every transport.
   اگر سرور با وضعیت ۲۰۰ ولی بدنهٔ خطا جواب بدهد، خطا گم نشود: */
function createSSEParser(onDelta, onSseDone) {
  let buf = '', lastErr = null, sawContent = false, reasoningMode = false, doneAnnounced = false;
  const extract = (j) => {
    if (j && (j.error || j.errors)) { lastErr = JSON.stringify(j.error || j.errors); return; }
    const d = j.choices && j.choices[0] && (j.choices[0].delta || j.choices[0].message || {});
    const t = ((d && d.content) || '').toString();
    const r = ((d && (d.reasoning || d.reasoning_content)) || '').toString();
    if (r && !t && !sawContent) {
      /* مدل‌های استدلالی (gpt-oss): تفکر در فیلد جدا می‌آید → نشانگر «دارم فکر می‌کنم» */
      if (!reasoningMode) { reasoningMode = true; onDelta('<think>'); }
    } else if (t) {
      if (reasoningMode) { reasoningMode = false; onDelta('</think>'); }
      sawContent = true; onDelta(t);
    }
  };
  return {
    push(chunk) {
      buf += chunk;
      const lines = buf.split('\n');
      buf = lines.pop();
      for (const raw of lines) {
        const line = raw.trim();
        if (!line.startsWith('data:')) continue;
        const data = line.slice(5).trim();
        if (!data) continue;
        if (data === '[DONE]') {
          /* پایان استاندارد استریم — فوراً اتصال را تمام کن (منتظر EOF نمان) */
          if (!doneAnnounced) {
            doneAnnounced = true;
            if (onSseDone) { try { onSseDone(); } catch (e) {} }
          }
          continue;
        }
        try { extract(JSON.parse(data)); } catch (e) { /* partial json — ignore */ }
      }
    },
    end() {
      if (buf.trim().startsWith('data:')) {
        try { extract(JSON.parse(buf.trim().slice(5).trim())); } catch (e) {}
      }
    },
    getError() { return sawContent ? null : lastErr; }
  };
}

/* v1.10.1: مدل‌های آزادِ استخراج‌شده از خطای model_concurrency دال — برای فالبک فوری */
let BUSY_ALT_MODELS = [];

function friendlyError(status, bodyText) {
  let code = '', msg = '';
  try {
    const j = JSON.parse(bodyText);
    if (j.errors && j.errors[0]) { code = j.errors[0].code; msg = j.errors[0].message || ''; }
    if (j.error && j.error.message) { msg = j.error.message; code = j.error.code || ''; }
    /* v1.16.0: فرمت سادهٔ کوآرنا — پیام خطا در سطح بالای JSON ({"message": "…"}) */
    if (!msg && typeof j.message === 'string') { msg = j.message; }
  } catch (e) { msg = (bodyText || '').slice(0, 200); }

  /* خطاهای سطح مدل → تگ فالبک: سوکوت خودکار با مدل پایدار ادامه می‌دهد */
  if (MODEL_ERR_RE.test(msg) || code === 5035) {
    if (/not available on the Workers Free plan/i.test(msg)) {
      return '[model-unavailable] این مدل فقط روی پلن پولی کلادفلر فعال است — سوکوت خودکار با مدل پایدار ادامه می‌دهد (یا در تنظیمات مدل رایگان دیگری انتخاب کن).';
    }
    if (/deprecated|No such model|model_not_found/i.test(msg)) {
      return '[model-unavailable] این مدل بازنشسته یا حذف شده است — سوکوت خودکار با مدل پایدار جایگزین ادامه می‌دهد.';
    }
    return '[model-unavailable] این مدل روی این حساب در دسترس نیست (نیاز به تأیید لایسنس در پنل کلادفلر دارد) — سوکوت خودکار با مدل پایدار ادامه می‌دهد.';
  }

  /* موجودی/دسترسی سرویس → سوییچ خودکار به سرویس بعدی (پولینیشن رایگان) */
  if (/insufficient_user_quota|gift balance|remaining eligible quota/i.test(msg) || /insufficient/i.test(String(code))
    || /quota exceeded|usage limit|token limit exceeded|monthly (token|usage)/i.test(msg)
    || /invalid api key|unauthorized|missing bearer/i.test(msg)
    || /no access to model|This token has no access/i.test(msg)
    || /error code: 1010/i.test(msg)) {
    return '[provider-quota] کلید یا موجودی این سرویس پاسخ نداد — سوکوت خودکار به سرویس بعدی سوییچ می‌کند.';
  }

  if (code === 9109 || /location/i.test(msg)) {
    return 'توکن شما محدودیت IP دارد (خطای 9109). در پنل کلادفلر توکن را ویرایش کنید و بخش «IP Address Filtering» را حذف کنید.';
  }
  if (code === 7003 || code === 7000) return 'مدل روی این حساب در دسترس نیست یا نام مدل اشتباه است. در تنظیمات مدل دیگری انتخاب کنید (مثلاً Llama 3.3 70B Fast).';
  if (status === 400 && /max_tokens|token/i.test(msg)) return 'طول پاسخ برای این مدل زیاد است؛ در تنظیمات «سبک پاسخ» را روی متعادل یا کوتاه بگذارید.';
  if (status === 401 || code === 10000) return 'توکن نامعتبر یا منقضی است. یک توکن جدید بسازید.';
  if (status === 403) return 'دسترسی رد شد. توکن باید دسترسی «Workers AI — Edit» داشته باشد.';
  if (status === 404) return 'مدل یا آدرس پیدا نشد. نام مدل و Account ID را بررسی کنید.';
  /* v1.10.1: شلوغی لحظه‌ای مغز دال (model_concurrency) — سوکوت خودکار با مغز آزادِ همان سرویس ادامه می‌دهد
     بدنهٔ خطا: "Other models available now: MiniMaxAI/MiniMax-M2.7, deepseek-ai/DeepSeek-V4-Flash-0731."
     → لیست مدل‌های آزاد استخراج و در BUSY_ALT_MODELS برای فالبک فوری نگه داشته می‌شود */
  /* v1.16.0: کوآرنا — سقف ۲ درخواستِ همزمانِ اکانت؛ مثل شلوغی مدیریت می‌شود */
  if (/calls in flight|in flight for this account/i.test(msg)) {
    return '[model-busy] کوآرنا همین لحظه به سقف ۲ درخواستِ همزمانِ اکانت رسیده — سوکوت خودکار ادامه می‌دهد.';
  }

  if (code === 'model_concurrency' || /concurrency capacity|at concurrency/i.test(msg)) {
    BUSY_ALT_MODELS = [];
    /* توجه: شناسهٔ مدل‌ها خودشان نقطه دارند (مثل MiniMax-M2.7) → تا «. You can switch» می‌گیریم، نه تا اولین نقطه */
    const av = String(msg).match(/Other models available now:\s*([\s\S]*?)\.\s*(?:You can switch|Retry|$)/i);
    if (av) BUSY_ALT_MODELS = av[1].split(',').map((x) => x.trim().replace(/\.$/, '')).filter((x) => x && x.indexOf('/') !== -1);
    return '[model-busy] مغز انتخابی همین لحظه شلوغ است (پلن رایگان در صف است) — سوکوت خودکار با مغز آزاد ادامه می‌دهد.';
  }

  if (status === 429) return 'محدودیت موقت درخواست‌ها (rate limit). چند لحظه بعد دوباره امتحان کن — یا مدل سبک‌تری انتخاب کن.';
  if (status >= 500) return 'خطای سرور کلادفلر. کمی بعد دوباره تلاش کنید.';
  return 'خطا ' + (status || '') + ': ' + (msg || 'نامشخص');
}

/* native bridges report errors as "<status>||<body>" — convert to friendly Persian text */
function translateErr(err) {
  if (!err) return null;
  const m = String(err).match(/^\s*(\d{3})\|\|([\s\S]*)$/);
  if (m && m[1] !== '000') return friendlyError(+m[1], m[2]);
  if (m && m[1] === '000') return m[2];
  return err;
}

/* Unified streaming request across all 3 environments.
   Every transport delivers RAW body chunks — SSE parsing runs centrally. */
function streamRequest(url, headers, body, onDelta, onDone) {
  const cbId = uid();
  let finished = false;
  let transportAbort = null; /* لغوِ مخصوص هر محیط — برای بستن اتصال بعد از [DONE] */
  /* v1.16.0: terminator استاندارد OpenAI «data: [DONE]» — سرورهایی مثل کوآرنا بعد از [DONE]
     اتصال را فوراً نمی‌بندند؛ منتظرِ EOF ماندن، پاسخ را تا ابد «در حال نوشتن» نگه می‌داشت */
  const onSseDone = () => {
    setTimeout(() => {
      try { if (transportAbort) transportAbort(); } catch (e) {}
      handleDone(null);
    }, 50);
  };
  const parser = createSSEParser(onDelta, onSseDone);
  const handleChunk = (raw) => { try { parser.push(raw); } catch (e) {} };
  const handleDone = (err) => {
    if (finished) return;
    finished = true;
    try { parser.end(); } catch (e) {}
    if (!err) {
      const perr = parser.getError();
      if (perr) err = friendlyError(0, perr);
    }
    pendingStreams.delete(cbId);
    onDone(err);
  };

  if (ENV === 'android') {
    if (typeof AndroidAI === 'undefined' || !AndroidAI.request) {
      setTimeout(() => handleDone('پل اندروید در دسترس نیست.'), 0);
      return { stop: () => {} };
    }
    pendingStreams.set(cbId, { onDelta: handleChunk, onDone: handleDone });
    AndroidAI.request(cbId, url, JSON.stringify(headers), JSON.stringify(body));
    transportAbort = () => { try { AndroidAI.cancel(cbId); } catch (e) {} };
    return { stop: transportAbort };
  }
  if (ENV === 'electron') {
    if (!window.electronAPI) {
      setTimeout(() => handleDone('پل ویندوز در دسترس نیست.'), 0);
      return { stop: () => {} };
    }
    pendingStreams.set(cbId, { onDelta: handleChunk, onDone: handleDone });
    window.electronAPI.request({ id: cbId, url, headers, body });
    transportAbort = () => { try { window.electronAPI.cancel(cbId); } catch (e) {} };
    return { stop: transportAbort };
  }
  /* web */
  const ctrl = new AbortController();
  transportAbort = () => { try { ctrl.abort(); } catch (e) {} };
  pendingStreams.set(cbId, { onDelta: handleChunk, onDone: handleDone, abort: ctrl });
  (async () => {
    try {
      const res = await fetch(url, {
        method: 'POST', headers, body: JSON.stringify(body), signal: ctrl.signal
      });
      if (!res.ok) {
        const t = await res.text().catch(() => '');
        throw { status: res.status, body: t };
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        handleChunk(dec.decode(value, { stream: true }));
      }
      pendingStreams.delete(cbId);
      handleDone(null);
    } catch (err) {
      pendingStreams.delete(cbId);
      if (err && err.name === 'AbortError') { handleDone(null); return; }
      if (err && err.status) { handleDone(friendlyError(err.status, err.body)); return; }
      onDone('خطای شبکه: اتصال به سرور ممکن نشد.' +
        (ENV === 'web' ? ' (در مرورگر، درخواست مستقیم به کلادفلر ممکن است به دلایل CORS مسدود شود — از نسخهٔ اندروید/ویندوز استفاده کنید یا Worker واسط راه‌اندازی کنید)' : ''));
    }
  })();
  return { stop: () => { try { ctrl.abort(); } catch (e) {} } };
}

/* ---------- one-shot GET (web search) across transports ---------- */
function nativeGet(url) {
  return new Promise((resolve, reject) => {
    const cbId = uid();
    let buf = '';
    pendingStreams.set(cbId, {
      onDelta: (t) => { buf += t; },
      onDone: (err) => {
        if (err) {
          const m = String(err).match(/^\s*(\d{3})\|\|([\s\S]*)$/);
          reject({ status: m ? +m[1] : 0, body: m ? m[2] : String(err) });
        } else resolve(buf);
      }
    });
    const headers = { 'User-Agent': SEARCH_UA };
    if (ENV === 'android') {
      if (typeof AndroidAI === 'undefined' || !AndroidAI.request) {
        pendingStreams.delete(cbId); reject({ status: 0, body: 'no bridge' }); return;
      }
      AndroidAI.request(cbId, url, JSON.stringify(headers), ''); /* empty body => GET */
    } else if (ENV === 'electron') {
      if (!window.electronAPI) { pendingStreams.delete(cbId); reject({ status: 0, body: 'no bridge' }); return; }
      window.electronAPI.request({ id: cbId, url, headers, body: null }); /* null body => GET */
    } else {
      pendingStreams.delete(cbId);
      reject({ status: 0, body: 'web uses fetch' });
    }
  });
}

async function fetchText(url, timeoutMs) {
  const ctrl = new AbortController();
  const t = setTimeout(() => { try { ctrl.abort(); } catch (e) {} }, timeoutMs || 12000);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error('http ' + res.status);
    return await res.text();
  } finally { clearTimeout(t); }
}

/* __SEARCH_PARSERS_START__ */
function stripTags(s) {
  return fixPersian(String(s)
    .replace(/<[^>]*>/g, ' ')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')).trim();
}

/* DuckDuckGo Lite — rows of <a class=result-link href=…> + <td class=result-snippet> */
function parseDDGLite(html) {
  const out = [];
  const snips = [];
  const snRe = /<td[^>]*result-snippet[^>]*>([\s\S]*?)<\/td>/g;
  let sm;
  while ((sm = snRe.exec(html))) snips.push(stripTags(sm[1]));
  const linkRe = /<a\b([^>]*)>([\s\S]*?)<\/a>/g;
  let m, i = 0;
  while ((m = linkRe.exec(html)) && out.length < 8) {
    const attrs = m[1] || '';
    if (!/result-link/.test(attrs)) continue;
    const h = attrs.match(/href=["']?([^"'\s>]+)/);
    if (!h) continue;
    let url = h[1];
    const u = url.match(/[?&]uddg=([^&]+)/);
    if (u) { try { url = decodeURIComponent(u[1]); } catch (e) {} }
    if (!/^https?:/i.test(url)) continue;
    out.push({ title: stripTags(m[2]), url: url, snippet: snips[i] || '' });
    i++;
  }
  return out;
}

/* DuckDuckGo HTML — a.result__a + a.result__snippet / .result__snippet */
function parseDDGHtml(html) {
  const out = [];
  const blockRe = /<div[^>]*class=["'][^"']*result[^"']*["'][^>]*>([\s\S]*?)<\/div>\s*(?=<div[^>]*class=["'][^"']*result|<\/div>\s*<\/div>|$)/gi;
  const simpleRe = /<a[^>]*class=["'][^"']*result__a[^"']*["'][^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/g;
  const snipRe = /class=["'][^"']*result__snippet[^"']*["'][^>]*>([\s\S]*?)<\/a>/g;
  const snips = [];
  let sm;
  while ((sm = snipRe.exec(html))) snips.push(stripTags(sm[1]));
  let m, i = 0;
  while ((m = simpleRe.exec(html)) && out.length < 8) {
    let url = m[1];
    const u = url.match(/[?&]uddg=([^&]+)/);
    if (u) { try { url = decodeURIComponent(u[1]); } catch (e) {} }
    if (!/^https?:/i.test(url)) continue;
    out.push({ title: stripTags(m[2]), url: url, snippet: snips[i] || '' });
    i++;
  }
  return out;
}

/* Bing — <li class=b_algo><h2><a href>title</a></h2>… <p>snippet</p> */
function parseBing(html) {
  const out = [];
  const liRe = /<li\b[^>]*class=["'][^"']*b_algo[^"']*["'][^>]*>([\s\S]*?)<\/li>/g;
  let m;
  while ((m = liRe.exec(html)) && out.length < 8) {
    const seg = m[1];
    const a = seg.match(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
    if (!a) continue;
    if (!/^https?:/i.test(a[1])) continue;
    const p = seg.match(/<p\b[^>]*>([\s\S]*?)<\/p>/i);
    out.push({ title: stripTags(a[2]), url: a[1], snippet: p ? stripTags(p[1]) : '' });
  }
  return out;
}

/* Wikipedia (CORS-friendly everywhere) */
function parseWiki(jsonText, lang) {
  const j = JSON.parse(jsonText);
  const hits = (j.query && j.query.search) || [];
  return hits.map((h) => ({
    title: fixPersian(h.title || ''),
    url: 'https://' + lang + '.wikipedia.org/wiki/' + encodeURIComponent(String(h.title || '').replace(/ /g, '_')),
    snippet: stripTags(h.snippet || '')
  }));
}
/* __SEARCH_PARSERS_END__ */

/* engine chain: native = direct GET; web = CORS proxies then Wikipedia (direct) */
async function viaProxies(url, parse) {
  const wrapped = [
    'https://api.allorigins.win/raw?url=' + encodeURIComponent(url),
    'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(url)
  ];
  for (const p of wrapped) {
    try {
      const r = parse(await fetchText(p, 13000));
      if (r && r.length) return r;
    } catch (e) { /* next proxy */ }
  }
  return [];
}

/* engine race: all engines run in parallel with per-engine timeout;
   first engine that returns results wins (order preserved via small staggers).
   native = direct GET; web = CORS proxies then Wikipedia (direct). */
function withTimeout(p, ms) {
  return Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('search timeout')), ms))]);
}

async function runEngineRace(engines) {
  const tasks = engines.map((run, i) =>
    withTimeout(
      new Promise((res) => setTimeout(res, i * 220)).then(run),
      12000
    ).then((r) => {
      if (!r || !r.length) throw new Error('engine ' + i + ': empty');
      return r.slice(0, 5);
    })
  );
  try { return await Promise.any(tasks); } catch (e) { return []; }
}

async function webSearch(query) {
  const q = encodeURIComponent(String(query).slice(0, 140));
  const engines = [];
  if (ENV === 'web') {
    engines.push(() => viaProxies('https://lite.duckduckgo.com/lite/?q=' + q, parseDDGLite));
    engines.push(() => viaProxies('https://html.duckduckgo.com/html/?q=' + q, parseDDGHtml));
    engines.push(() => viaProxies('https://www.bing.com/search?q=' + q, parseBing));
    engines.push(async () => parseWiki(await fetchText('https://fa.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srlimit=5&srsearch=' + q, 11000), 'fa'));
    engines.push(async () => parseWiki(await fetchText('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srlimit=5&srsearch=' + q, 11000), 'en'));
  } else {
    engines.push(async () => parseDDGLite(await nativeGet('https://lite.duckduckgo.com/lite/?q=' + q)));
    engines.push(async () => parseDDGHtml(await nativeGet('https://html.duckduckgo.com/html/?q=' + q)));
    engines.push(async () => parseBing(await nativeGet('https://www.bing.com/search?q=' + q)));
    engines.push(async () => parseWiki(await nativeGet('https://fa.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srlimit=5&srsearch=' + q), 'fa'));
    engines.push(async () => parseWiki(await nativeGet('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srlimit=5&srsearch=' + q), 'en'));
  }
  try { return await runEngineRace(engines); } catch (e) { return []; }
}

const SEARCH_HINTS = /(اخبار|خبرهای|خبر |امروز|دیروز|به تازگی|جدیدترین|آخرین|اکنون|الان|قیمت|نرخ|دلار|تومان|بیت.?کوین|ارز|بورس|آب و هوا|هوا.?شناسی|نتیجه|جدول|امتیاز|انتخابات|نسخه|آپدیت|به.?روز|چه کسی|کی بود|کجاست|چند شد|تاریخ امروز|تعطیل|طلا|سکه|هر گرم|سال (۲۰)?\d{2}|۱۴۰[۰-۹])/i;

function shouldSearch(text) {
  const mode = settings.webSearch || 'auto';
  if (mode === 'off') return false;
  if (mode === 'always') return true;
  return SEARCH_HINTS.test(text);
}

/* دسته‌بندی خطاها برای «تست اتصال» مدیریت API */
function errCat(msg) {
  const m = String(msg || '');
  if (/\[model-unavailable\]/.test(m)) return 'مدل';
  if (/توکن نامعتبر|دسترسی رد شد|Authentication|auth/i.test(m)) return 'احراز هویت';
  if (/محدودیت|rate limit|429/i.test(m)) return 'محدودیت درخواست';
  if (/خطای شبکه|وصل شو|CORS|پل /.test(m)) return 'اتصال';
  return 'نامشخص';
}

/* ---------- one-shot request used by "test connection" ---------- */
function testConnection(cb) {
  const p0 = PROVIDERS[settings.provider] || PROVIDERS.cloudflare;
  /* تست همیشه سرویسِ انتخاب‌شدهٔ واقعی را می‌سنجد، نه سرویسی که فالبک قبلی فعال کرده */
  activeProvider = null;
  const url = apiUrl();
  if (!url) { cb(false, 'آدرس API خالی است — در تب «اتصال» سرویس یا آدرس خارجی را تنظیم کن.'); return; }
  const needTok = p0.needsToken !== false;
  const needAcct = p0.needsAccount && !(settings.base || '').trim();
  if ((needTok && !settings.token.trim()) || (needAcct && !settings.account.trim())) { cb(false, 'ابتدا توکن (و برای کلادفلر Account ID) را در تب «اتصال» وارد کن.'); return; }
  const tryModel = (model, retried, note) => {
    /* مدل‌های استدلالی دال فکرشان را از سهم می‌خورند — با سهم کم جوابی نمی‌آید */
    const isDahlTest = settings.provider === 'dahl';
    /* v1.16.0: کوآرنا سهم بزرگ‌تر می‌خواهد — مدل‌های استدلالی فکر را از همین سهم می‌خورند */
    const isCoaTest = settings.provider === 'coarena';
    const body = {
      model: model, stream: true, max_tokens: isCoaTest ? 2600 : (isDahlTest ? 600 : 60),
      messages: [{ role: 'user', content: 'سلام! فقط بگو: اتصال برقرار است' }]
    };
    let acc = '';
    streamRequest(url, apiHeaders(), body, (t) => { acc += t; }, (err) => {
      /* مدل در دسترس نبود؟ یک بار با مدل پایدار جایگزین تست کن */
      if (err && err.indexOf('[model-unavailable]') !== -1 && !retried) {
        const alt = fallbackModel(model);
        tryModel(alt, true, 'مدل «' + prettyModel(model) + '» روی این حساب فعال نیست — تست با «' + prettyModel(alt) + '»: ');
        return;
      }
      /* v1.16.0: کوآرنا شلوغ بود (سقف ۲ درخواست همزمان)؟ یک بار با وقفهٔ کوتاه دوباره تست کن */
      if (err && err.indexOf('[model-busy]') !== -1 && settings.provider === 'coarena' && !retried) {
        setTimeout(() => tryModel(model, true, 'کوآرنا همین لحظه در صف بود — تستِ دوباره: '), 1800);
        return;
      }
      /* v1.10.1: مغز دال شلوغ بود؟ تست با مغزِ آزادِ همان سرویس (یک بار) */
      if (err && err.indexOf('[model-busy]') !== -1 && !retried) {
        const dahlIds = Object.keys(PROVIDERS.dahl.models);
        const balt = (BUSY_ALT_MODELS || []).find((id) => id !== model && dahlIds.indexOf(id) !== -1);
        if (balt) {
          tryModel(balt, true, 'مغز «' + prettyModel(model) + '» همین لحظه شلوغ بود — تست با «' + prettyModel(balt) + '»: ');
          return;
        }
      }
      /* موجودی/دسترسی سرویس؟ با سرویس رایگان پولینیشن تست کن */
      if (err && err.indexOf('[provider-quota]') !== -1 && !provRetried) {
        provRetried = true;
        activeProvider = 'pollinations';
        const body2 = { model: chosenModel('pollinations'), stream: true, max_tokens: 60, messages: [{ role: 'user', content: 'سلام! فقط بگو: اتصال برقرار است' }] };
        let acc2 = '';
        streamRequest(apiUrl('pollinations'), apiHeaders('pollinations'), body2, (t2) => { acc2 += t2; }, (err2) => {
          activeProvider = null;
          if (!err2 && acc2.trim()) cb(true, note + 'موجودی «' + p0.name + '» کافی نیست ولی سرویس رایگان پولینیشن سبز است ✓ — پاسخ: ' + stripThink(acc2).text.trim().slice(0, 100));
          else cb(false, err);
        });
        return;
      }
      if (err) cb(false, 'خطای ' + errCat(err) + ': ' + err);
      else if (!stripThink(acc).text.trim()) cb(false, 'خطای پاسخ: اتصال برقرار شد ولی مدلی جواب نداد — مدل یا Account ID را بررسی کن.');
      else { activeProvider = null; cb(true, (note || '') + 'اتصال موفق ✓ — پاسخ واقعی مدل: ' + stripThink(acc).text.trim().slice(0, 120)); }
    });
  };
  let provRetried = false;
  tryModel(chosenModel(), false, '');
}

/* ---------- API URL / config (multi-provider + زنجیرهٔ سوییچ خودکار) ---------- */
let activeProvider = null; /* هنگام فالبک سرویس، سرویسِ فعال اینجا نگه داشته می‌شود */
function curProvider() { return activeProvider || settings.provider || 'cloudflare'; }
function providerChain() {
  const chain = [settings.provider];
  if (settings.provider === 'freemodel') chain.push('dahl'); /* فری‌مدل ← دال ← رایگان */
  if (settings.provider === 'coarena') chain.push('freemodel'); /* کوآرنا ← فری‌مدل ← رایگان */
  if (settings.provider !== 'pollinations') chain.push('pollinations'); /* نگهبان رایگانِ آخر */
  return chain;
}
function apiUrl(p) {
  const s = settings;
  const pid = p || curProvider();
  /* سرویس دال و فری‌مدل آدرس مخصوص خودشان را دارند (override دستی اثر نمی‌گذارد) */
  if (pid === 'dahl') return (PROVIDERS.dahl.endpoint)(s);
  if (pid === 'freemodel') return (PROVIDERS.freemodel.endpoint)(s);
  if (pid === 'coarena') return (PROVIDERS.coarena.endpoint)(s);
  /* override دستی همیشه اولویت دارد (برای تست/سرویس دلخواه) */
  if (s.base && s.base.trim()) {
    let b = s.base.trim().replace(/\/+$/, '');
    if (!/chat\/completions$/.test(b)) {
      b += /\/v\d+$/.test(b) ? '/chat/completions' : '/v1/chat/completions';
    }
    return b;
  }
  const prov = PROVIDERS[pid] || PROVIDERS.cloudflare;
  const url = prov.endpoint(s);
  if (url) return url;
  return (s.modelCustom || '').trim() ? '' : url;
}
function apiHeaders(p) {
  const pid = p || curProvider();
  const h = { 'Content-Type': 'application/json' };
  /* پولینیشن بدون کلید کار می‌کند — هدر احراز فقط وقتی توکن هست */
  const tok = pid === 'dahl' ? (settings.dahlToken || DAHL_DEFAULT_KEY).trim()
    : pid === 'freemodel' ? (settings.fmToken || FM_DEFAULT_KEY).trim()
    : pid === 'coarena' ? (settings.coaToken || COA_DEFAULT_KEY).trim()
    : (settings.token || '').trim();
  if (tok) h['Authorization'] = 'Bearer ' + tok;
  return h;
}
function chosenModel(p) {
  const pid = p || curProvider();
  if (pid === 'dahl') {
    const ids = Object.keys(PROVIDERS.dahl.models);
    return ids.indexOf(settings.model) !== -1 ? settings.model : DAHL_DEFAULT_MODEL;
  }
  if (pid === 'freemodel') {
    const ids = Object.keys(PROVIDERS.freemodel.models);
    return ids.indexOf(settings.model) !== -1 ? settings.model : FM_DEFAULT_MODEL;
  }
  if (pid === 'coarena') {
    const ids = Object.keys(PROVIDERS.coarena.models);
    return ids.indexOf(settings.model) !== -1 ? settings.model : COA_DEFAULT_MODEL;
  }
  if (pid === 'pollinations') return 'openai-fast';
  return settings.model === 'custom' ? (settings.modelCustom || '').trim() : settings.model;
}
function prettyModel(id) {
  if (!id) return '—';
  if (MODEL_NAMES[id]) return MODEL_NAMES[id];
  if (PROVIDERS.dahl.models[id]) return PROVIDERS.dahl.models[id].split('—')[0].trim();
  if (PROVIDERS.freemodel.models[id]) return PROVIDERS.freemodel.models[id].split('—')[0].trim();
  if (PROVIDERS.coarena.models[id]) return PROVIDERS.coarena.models[id].split('—')[0].trim();
  if (id === 'openai-fast') return 'مغز رایگان پولینیشن';
  return id.length > 26 ? id.slice(0, 26) + '…' : id;
}

/* ---------- reasoning models: strip <think>…</think> ---------- */
function stripThink(text) {
  const s = String(text);
  const open = s.indexOf('<think>');
  if (open === -1) return { text: s, thinking: false };
  const close = s.indexOf('</think>');
  if (close === -1) return { text: s.slice(0, open), thinking: true };
  return { text: s.slice(0, open) + s.slice(close + 8), thinking: false };
}

/* ---------- markdown-lite renderer (with copy-code blocks) ---------- */
/* کپی دقیق: متن خام هر بلوک کد با کلید هش محتوا ذخیره می‌شود تا innerText هرگز نصفه‌کاره نشود */
const codeStore = new Map();
function codeHash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return 'cb' + (h >>> 0).toString(36);
}
/* متن کد بعد از esc() به ما می‌رسد — قبل از ذخیره/کپی باید رمزگشایی شود */
function unescCode(s) {
  return String(s).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
}
function renderMD(text) {
  let s = esc(fixPersian(text));
  const blocks = [];
  s = s.replace(/```([\w+#.-]*)\n?([\s\S]*?)```/g, (m, lang, code) => {
    const i = blocks.length;
    const label = lang ? lang.toUpperCase() : 'کد';
    const rawCode = unescCode(code).replace(/\n$/, '');
    const cid = codeHash(rawCode);
    codeStore.set(cid, rawCode);
    const runnable = isRunnableCode(lang, rawCode);
    const runLabel = /<canvas|<html|<!DOCTYPE/i.test(rawCode) ? 'اجرای بازی' : 'اجرای کد';
    blocks.push(
      (runnable && settings.gameBigRun !== false ? '<button type="button" class="run-banner"><svg class="ic ic-sm"><use href="#i-play"/></svg><span>' + runLabel + ' — همین‌جا اجرا کن</span></button>' : '') +
      '<div class="codeblock" data-cid="' + cid + '"><div class="code-bar">' +
      '<span class="lang" dir="ltr">' + esc(label) + '</span>' +
      '<span style="display:inline-flex;gap:6px">' +
      (runnable ? '<button type="button" class="code-copy code-run"><svg class="ic ic-sm"><use href="#i-play"/></svg><span>' + runLabel + '</span></button>' : '') +
      '<button type="button" class="code-copy"><svg class="ic ic-sm"><use href="#i-copy"/></svg><span>کپی کد</span></button>' +
      '</span>' +
      '</div><pre><code dir="ltr">' + code.replace(/\n$/, '') + '</code></pre></div>'
    );
    return '\u0000B' + i + '\u0000';
  });
  s = s.replace(/`([^`\n]+)`/g, '<code class="inline">$1</code>');
  s = s.replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>');
  s = s.replace(/\[([^\]\n]{1,80})\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  const lines = s.split('\n');
  let html = '', list = null;
  const closeList = () => { if (list) { html += '</' + list + '>'; list = null; } };
  for (const raw of lines) {
    const line = raw.trim();
    if (/^\u0000B\d+\u0000$/.test(line)) { closeList(); html += line; continue; }
    if (!line) { closeList(); continue; }
    let m;
    if ((m = line.match(/^[-•*]\s+(.*)/))) {
      if (list !== 'ul') { closeList(); html += '<ul>'; list = 'ul'; }
      html += '<li>' + m[1] + '</li>';
    } else if ((m = line.match(/^(\d+)[.)]\s+(.*)/))) {
      if (list !== 'ol') { closeList(); html += '<ol>'; list = 'ol'; }
      html += '<li>' + m[2] + '</li>';
    } else if ((m = line.match(/^#{1,6}\s+(.*)/))) {
      closeList(); html += '<p><b>' + m[1] + '</b></p>';
    } else {
      closeList(); html += '<p>' + line + '</p>';
    }
  }
  closeList();
  html = html.replace(/\u0000B(\d+)\u0000/g, (m, i) => blocks[+i]);
  return html;
}

/* — بازی/کد قابل اجرا؟ (استودیوی بازی‌سازی v1.5.0) — */
function isRunnableCode(lang, rawCode) {
  if (/^(html|htm)$/i.test(String(lang || ''))) return true;
  if (/^(js|javascript)$/i.test(String(lang || ''))) return true;
  return /<html[\s>]|<!DOCTYPE|<canvas[\s>]|<body[\s>]/i.test(String(rawCode || ''));
}
const RUN_HOOK =
  '<scr' + 'ipt>(function(){' +
  'function send(m,l,s){try{parent.postMessage({__sukotRunError:{message:String(m).slice(0,600),line:l||0,stack:String(s||"").slice(0,600)}},"*");}catch(e){}}' +
  'window.addEventListener("error",function(e){send(e.message,e.lineno,e.error&&e.error.stack);});' +
  'window.addEventListener("unhandledrejection",function(e){var r=e.reason;send("Promise: "+((r&&r.message)||r),0,r&&r.stack);});' +
  'var ce=console.error;console.error=function(){try{ce.apply(console,arguments);}catch(x){}' +
  'send(Array.prototype.map.call(arguments,function(a){try{return typeof a==="object"?JSON.stringify(a).slice(0,200):String(a);}catch(y){return String(a);}}).join(" "),0,"");};' +
  '})();</scr' + 'ipt>';
function prepareRunHTML(code, lang) {
  let L = String(lang || '');
  /* اگر زبان html است ولی کد اصلاً تگ HTML ندارد (مثلاً JS در ویرایشگر چسبیده)، آن را JS اجرا کن */
  if (/^(html|htm)$/i.test(L) && !/<\w/.test(code)) L = 'js';
  if (/^(html|htm)$/i.test(L) || /<html[\s>]|<!DOCTYPE/i.test(code)) {
    let h = code;
    if (!/<meta[^>]+viewport/i.test(h)) {
      if (/<head[^>]*>/i.test(h)) h = h.replace(/<head[^>]*>/i, (m) => m + '\n<meta name="viewport" content="width=device-width, initial-scale=1">');
      else h = '<meta name="viewport" content="width=device-width, initial-scale=1">\n' + h;
    }
    if (/<head[^>]*>/i.test(h)) h = h.replace(/<head[^>]*>/i, (m) => m + RUN_HOOK);
    else h = RUN_HOOK + h;
    return h;
  }
  return '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<style>html,body{margin:0;background:#0c0716;color:#f0eaf9;font-family:monospace;padding:10px;white-space:pre-wrap}</style>' + RUN_HOOK + '</head><body>' +
    '<div id="sukot-run-err" style="color:#ff8fa0;white-space:pre-wrap"></div>' +
    '<scr' + 'ipt>window.onerror=function(m,s,l){var e=document.getElementById("sukot-run-err");if(e)e.textContent+="خطا: "+m+" (خط "+l+")\\n";return false;};</scr' + 'ipt>' +
    '<scr' + 'ipt>' + code + '</scr' + 'ipt></body></html>';
}
let runActiveLang = '';
let runActiveCode = '';
let runOriginalCode = '';
let runErrSeen = null;
function clearRunErrors() {
  runErrSeen = null;
  const box = $('#run-errors');
  if (box) { box.classList.add('hidden'); $('#run-err-list').textContent = ''; }
}
function addRunError(e) {
  if (settings.runErrors === false) return;
  const line = (e.line ? ' (خط ' + e.line + ')' : '');
  const key = e.message + '|' + e.line;
  /* همان خطای تکراری پشت‌سرهم را فقط یک‌بار نشان بده */
  if (runErrSeen === key) return;
  runErrSeen = key;
  const box = $('#run-errors');
  box.classList.remove('hidden');
  const pre = $('#run-err-list');
  pre.textContent += (pre.textContent ? '\n' : '') + '• ' + e.message + line;
  scrollBottom(false);
}
window.addEventListener('message', (ev) => {
  try {
    const d = ev && ev.data;
    if (d && d.__sukotRunError && d.__sukotRunError.message) addRunError(d.__sukotRunError);
  } catch (e) {}
});
function runCodeRaw(code, lang) {
  runActiveCode = code;
  if (!runOriginalCode) runOriginalCode = code;
  clearRunErrors();
  $('#run-frame').srcdoc = prepareRunHTML(code, lang);
  $('#run-backdrop').classList.remove('hidden');
  const ed = $('#run-editor');
  if (ed && !ed.classList.contains('hidden')) $('#run-code').value = code;
}
function runCodeFromBlock(block) {
  const cid = block.dataset.cid;
  const raw = (cid && codeStore.has(cid)) ? codeStore.get(cid) : unescCode(block.querySelector('code').innerText);
  const langEl = block.querySelector('.lang');
  const lang = langEl ? langEl.textContent.trim().toLowerCase() : '';
  runActiveLang = lang;
  runOriginalCode = '';
  runCodeRaw(raw, lang);
}
function closeRunOverlay() {
  $('#run-backdrop').classList.add('hidden');
  try { $('#run-frame').srcdoc = ''; } catch (e) {}
  $('#run-editor').classList.add('hidden');
  clearRunErrors();
  runOriginalCode = '';
}
function fixGameWithSukot() {
  const errs = ($('#run-err-list').textContent || '').slice(0, 600);
  if (runActiveCode) {
    pendingAttach.push({ kind: 'file', name: 'game.' + (/^(html|htm)$/.test(runActiveLang) ? 'html' : 'js'), text: runActiveCode.slice(0, 60000) });
    renderAttachBar();
  }
  $('#input').value = 'این کد بازی موقع اجرا این خطا(ها) را داد:' + (errs ? '\n' + errs : '') + '\n\nلطفاً کد را پیدا و رفع کن و نسخهٔ کامل و اصلاح‌شدهٔ بازی را به‌صورت یک فایل HTML کامل بده تا دوباره اجرا کنم.';
  autoGrow();
  closeRunOverlay();
  $('#input').focus();
  toast('خطا و کد پیوست شد — ارسال بزن تا سوکوت تعمیرش کند');
}

/* ---------- clipboard (secure-context + legacy fallback for WebView file://) ---------- */
function copyText(txt, onDone) {
  const done = () => { if (onDone) onDone(); };
  const legacy = () => {
    try {
      const ta = document.createElement('textarea');
      ta.value = txt;
      ta.style.cssText = 'position:fixed;top:-999px;opacity:0';
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      done();
    } catch (e) { done(); }
  };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(txt).then(done, legacy);
  } else legacy();
}

/* ============================================================
   v1.14.0 — TTS ابری: خواندن پاسخ «فقط» با API صدا
   صدای پیش‌فرض سامسونگ/دستگاه کاملاً حذف شد — هیچ صدایی از موتور گوشی
   پخش نمی‌شود؛ همهٔ صدا از همان API قابل‌تنظیمِ بخش «صدای ابری» می‌آید.
   پیش‌فرض: tts.ai (مدل piper، صدای فارسی fa_IR-amir-medium، فرمت wav)
   ============================================================ */
const TTS_DEF = { kind: 'ttsai', url: 'https://api.tts.ai/v1/', key: 'sk-tts-604767279a9e4cc2a3cfd290aee8c5f1', model: 'piper', voice: 'fa_IR-amir-medium' };
function ttsCfg() {
  const a = settings.ttsApi || {};
  return {
    kind: a.kind === 'openai' ? 'openai' : 'ttsai',
    url: String(a.url || TTS_DEF.url).trim(),
    key: String(a.key || TTS_DEF.key).trim(),
    model: String(a.model || TTS_DEF.model).trim(),
    voice: String(a.voice || TTS_DEF.voice).trim()
  };
}
let cloudAudio = null;
let cloudAbort = null;
let cloudUrls = [];
function ttsSpeed() { return Math.min(1.5, Math.max(0.6, Number(settings.speakRate) || 1)); }
function keepCloudUrl(u) {
  cloudUrls.push(u);
  /* نشانی‌های قدیمی آزاد شوند تا حافظه پر نشود */
  while (cloudUrls.length > 12) { try { URL.revokeObjectURL(cloudUrls.shift()); } catch (e) {} }
}
const TTS_WEB = () => typeof speechSynthesis !== 'undefined' && typeof SpeechSynthesisUtterance !== 'undefined';

/* — حالت ۱: API آسنکرون (مثل tts.ai): ساخت ← نظرسنجی سریع ← دانلود ← پخش — */
async function cloudTtsOneTtsai(text, signal) {
  const cfg = ttsCfg();
  const base = cfg.url.replace(/\/+$/, '') + '/';
  const headers = { 'Content-Type': 'application/json' };
  if (cfg.key) headers['Authorization'] = 'Bearer ' + cfg.key;
  const r = await fetch(base + 'tts/', {
    method: 'POST', headers, signal,
    body: JSON.stringify({ model: cfg.model, text: String(text).slice(0, 1800), voice: cfg.voice, speed: ttsSpeed(), format: 'wav' })
  });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const j = await r.json().catch(() => null);
  const uuid = j && (j.uuid || j.id);
  if (!uuid) throw new Error('پاسخ بدون شناسهٔ کار');
  /* نظرسنجی سریع: ۴ چکِ نخست هر ۰٫۷ ثانیه (تولید معمولاً چند ثانیه است)، بعد هر ۱٫۴ ثانیه */
  for (let i = 0; i < 40; i++) {
    if (signal && signal.aborted) throw new Error('aborted');
    await new Promise((res) => setTimeout(res, i < 4 ? 700 : 1400));
    let rr;
    try { rr = await fetch(base + 'speech/results/?uuid=' + encodeURIComponent(uuid), { headers: cfg.key ? { 'Authorization': 'Bearer ' + cfg.key } : undefined, signal }); } catch (e) { continue; }
    if (!rr.ok) continue;
    const jj = await rr.json().catch(() => null);
    const st = jj && jj.status;
    if (st === 'completed' && jj.result_url) {
      const au = await fetch(jj.result_url, { signal });
      if (!au.ok) throw new Error('دانلود صدا ' + au.status);
      const u = URL.createObjectURL(await au.blob());
      keepCloudUrl(u);
      return u;
    }
    if (st === 'failed' || st === 'error') throw new Error('ساخت صدا ناموفق بود');
  }
  throw new Error('زمان انتظار صدا تمام شد');
}
/* — حالت ۲: API سازگار با OpenAI (مسیر مستقیم /audio/speech) — */
async function cloudTtsOneOpenai(text, signal) {
  const cfg = ttsCfg();
  let b = cfg.url.replace(/\/+$/, '');
  if (!/audio\/speech$/.test(b)) b += /\/v\d+$/.test(b) ? '/audio/speech' : '/v1/audio/speech';
  const headers = { 'Content-Type': 'application/json' };
  if (cfg.key) headers['Authorization'] = 'Bearer ' + cfg.key;
  const r = await fetch(b, {
    method: 'POST', headers, signal,
    body: JSON.stringify({ model: cfg.model, voice: cfg.voice, input: String(text).slice(0, 1800), speed: ttsSpeed(), response_format: 'mp3' })
  });
  if (!r.ok) throw new Error('HTTP ' + r.status);
  const u = URL.createObjectURL(await r.blob());
  keepCloudUrl(u);
  return u;
}
/* متن بلند را به تکه‌های کوتاه بشکن — موتورهای گفتار متن بلند را نصفه می‌خوانند */
function chunkText(t, limit) {
  const L = Math.max(80, Number(limit) || 170);
  const parts = [];
  let cur = '';
  const sents = t.split(/(?<=[.!؟?؛:\n])\s+/);
  for (const s of sents) {
    const merged = cur ? cur + ' ' + s : s;
    if (merged.length > L) {
      if (cur) parts.push(cur.trim());
      if (s.length > L) {
        let rest = s;
        while (rest.length > L) {
          let cut = rest.lastIndexOf(' ', L);
          if (cut < 40) cut = L;
          parts.push(rest.slice(0, cut).trim());
          rest = rest.slice(cut);
        }
        cur = rest;
      } else cur = s;
    } else cur = merged;
  }
  if (cur && cur.trim()) parts.push(cur.trim());
  return parts.filter(Boolean);
}
/* تکهٔ ابری کوچک‌تر → اولین صدا زودتر پخش می‌شود (رفع تأخیر «خیلی دیر جواب میده») */
const cloudChunkText = (t) => chunkText(t, 320);

let speakActive = null; // {btn, timer}
function setSpeakBtn(btn, on) {
  if (!btn) return;
  btn.classList.toggle('speaking', on);
  btn.title = on ? 'توقف خواندن' : 'خواندن با صدا';
  const use = btn.querySelector('use');
  if (use) use.setAttribute('href', on ? '#i-stop' : '#i-speak');
}
function cleanForSpeech(t) {
  let s = stripThink(t).text;
  s = s.replace(/[*_#]*\s*(?:منابع|منبع|Sources?)\s*:?\s*[\s\S]*$/i, ' ');
  s = s.replace(/```[\s\S]*?```/g, ' قطعهٔ کد. ');
  s = s.replace(/`([^`]+)`/g, '$1');
  s = s.replace(/\[([^\]]{1,80})\]\([^)]*\)/g, '$1');
  s = s.replace(/https?:\/\/\S+/g, ' ');
  s = s.replace(/[#>*_~|]+/g, ' ');
  s = s.replace(/^[-•]+\s*/gm, '');
  s = s.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{2B00}-\u{2BFF}\u{2190}-\u{21FF}]/gu, ' ');
  s = fixPersian(s).replace(/\s+/g, ' ').trim();
  return s;
}
function stopSpeak() {
  try { if (cloudAudio) { cloudAudio.pause(); cloudAudio.removeAttribute('src'); } } catch (e) {}
  cloudAudio = null;
  try { if (cloudAbort) cloudAbort.abort(); } catch (e) {}
  cloudAbort = null;
  try { if (TTS_WEB()) speechSynthesis.cancel(); } catch (e) {}
  if (speakActive) {
    clearTimeout(speakActive.timer);
    setSpeakBtn(speakActive.btn, false);
    speakActive = null;
  }
}
/* پل قدیمی اندروید ممکن است این را صدا بزند — بی‌ضرر نگه می‌داریم */
window.__ttsDone = function () {
  if (speakActive) {
    clearTimeout(speakActive.timer);
    setSpeakBtn(speakActive.btn, false);
    speakActive = null;
  }
};
function playCloudUrl(url, resolveOnStart) {
  return new Promise((resolve, reject) => {
    try { if (cloudAudio) { cloudAudio.pause(); } } catch (e) {}
    const a = new Audio();
    cloudAudio = a;
    a.src = url;
    let settled = false;
    const ok = () => { if (!settled) { settled = true; resolve(); } };
    const bad = (m) => { if (!settled) { settled = true; reject(new Error(m)); } };
    if (resolveOnStart) a.onplaying = ok; else a.onended = ok;
    a.onerror = () => bad('پخش صدا ممکن نشد');
    a.play().catch(() => bad('پخش صدا مسدود شد'));
  });
}
/* زنجیرهٔ صدا: تکه‌به‌تکه با پیش‌واکشی — تکهٔ بعدی قبل از پایان تکهٔ فعلی ساخته می‌شود */
function cloudSpeakChain(clean, btn, hooks) {
  const onState = (hooks && hooks.onState) || function () {};
  const onDone = (hooks && hooks.onDone) || null;
  const parts = cloudChunkText(clean);
  if (!parts.length) { if (onDone) onDone(true); return; }
  let i = 0, stopped = false;
  const ctrl = new AbortController();
  cloudAbort = ctrl;
  const urls = {};
  const run = ttsCfg().kind === 'openai' ? cloudTtsOneOpenai : cloudTtsOneTtsai;
  const start = (idx) => { if (!urls[idx]) urls[idx] = run(parts[idx], ctrl.signal); return urls[idx]; };
  start(0);
  const finish = (failed) => {
    if (stopped) return;
    stopped = true;
    try { ctrl.abort(); } catch (x) {}
    cloudAbort = null;
    if (speakActive && speakActive.btn === btn) {
      clearTimeout(speakActive.timer);
      setSpeakBtn(btn, false);
      speakActive = null;
    }
    onState('idle');
    if (failed) toast('صدای ابری جواب نداد — اتصال و تنظیمات «صدای ابری» را بررسی کن', true);
    if (onDone) onDone(!failed);
  };
  const playNext = () => {
    if (stopped) return;
    if (i >= parts.length) { finish(false); return; }
    const my = i;
    onState('speaking');
    start(my).then((url) => {
      if (stopped) return;
      if (my + 1 < parts.length) { try { start(my + 1).catch(() => {}); } catch (e) {} }
      return playCloudUrl(url).then(() => { if (my === i) i++; playNext(); });
    }).catch((e) => {
      if (stopped) return;
      if (String(e && e.message) === 'aborted') return;
      finish(true);
    });
  };
  speakActive = { btn: btn, timer: null };
  setSpeakBtn(btn, true);
  playNext();
}
/* فالبک دسکتاپ (هرگز اندروید — صدای دستگاه حذف شده)؛ فقط وقتی API ابری جواب نداد */
function desktopWebSpeechFallback(clean, btn, onDone) {
  if (ENV === 'android') return false;
  if (!TTS_WEB()) return false;
  const chunks = chunkText(clean, 170);
  let idx = 0;
  const next = () => {
    if (!speakActive || idx >= chunks.length) {
      if (speakActive) { clearTimeout(speakActive.timer); setSpeakBtn(speakActive.btn, false); speakActive = null; }
      if (onDone) onDone(true);
      return;
    }
    const u = new SpeechSynthesisUtterance(chunks[idx++]);
    u.lang = 'fa-IR';
    u.rate = Number(settings.speakRate) || 1;
    u.pitch = 1;
    u.onend = next; u.onerror = next;
    try { speechSynthesis.speak(u); } catch (e) { if (onDone) onDone(false); }
  };
  speakActive = { btn: btn, timer: null };
  setSpeakBtn(btn, true);
  next();
  return true;
}
function speak(raw, btn, hooks) {
  if (!raw) return;
  if (speakActive && speakActive.btn === btn) { stopSpeak(); if (hooks && hooks.onState) hooks.onState('idle'); return; }
  stopSpeak();
  const clean = cleanForSpeech(raw).slice(0, 6000);
  if (!clean) { toast('متنی برای خواندن نیست', true); return; }
  if (!navigator.onLine) { toast('برای صدا اینترنت لازم است — اتصال را بررسی کن', true); return; }
  cloudSpeakChain(clean, btn, {
    onState: hooks ? hooks.onState : null,
    onDone: (ok) => {
      if (!ok && !desktopWebSpeechFallback(clean, btn, hooks ? hooks.onDone : null)) {
        if (hooks && hooks.onDone) hooks.onDone(false);
      }
    }
  });
}
/* تست صدا در تنظیمات — با مقادیر لحظه‌ای فرم (حتی قبل از ذخیره) */
function testSpeak() {
  const r = $('#tts-test-result');
  if (r) { r.className = 'test-result'; r.textContent = 'در حال ساخت صدای آزمایشی…'; }
  const gv = (id) => { const el = $(id); return el ? el.value : ''; };
  const tmp = { kind: gv('#set-tts-kind') || 'ttsai', url: gv('#set-tts-url').trim(), key: gv('#set-tts-key').trim(), model: gv('#set-tts-model').trim(), voice: gv('#set-tts-voice').trim() };
  if (!tmp.url) {
    if (r) { r.className = 'test-result err'; r.textContent = 'آدرس API صدا را وارد کن'; }
    return;
  }
  const oldCfg = settings.ttsApi;
  settings.ttsApi = tmp;
  const done = (ok, msg) => {
    settings.ttsApi = oldCfg;
    if (r) { r.className = 'test-result ' + (ok ? 'ok' : 'err'); r.textContent = msg; }
  };
  const ctrl = new AbortController();
  cloudAbort = ctrl;
  const run = tmp.kind === 'openai' ? cloudTtsOneOpenai : cloudTtsOneTtsai;
  run('سلام! این صدای تازهٔ سوکوت است؛ فارسی برایم آسان است.', ctrl.signal)
    .then((url) => playCloudUrl(url, true))
    .then(() => done(true, '✓ صدا کار می‌کند — همین صدا پاسخ‌هایت را می‌خواند.'))
    .catch((e) => {
      if (String(e && e.message) === 'aborted') { done(false, 'تست لغو شد'); return; }
      done(false, '✗ صدای ابری جواب نداد: ' + (e && e.message ? e.message : e) + ' — آدرس/کلید/مدل/صدا را بررسی کن');
    });
}

/* ============================================================
   v1.14.0 — گفتگوی صوتی زنده (مثل ChatGPT) با دایرهٔ بزرگِ رنگین
   تشخیص گفتار فارسی ← ارسال خودکار بعد از سکوت ← پاسخ با صدای ابری
   ← گوش دادن دوباره (چرخهٔ گفت‌وشنید) — دایره در هر حالت رنگ عوض می‌کند
   ============================================================ */
const VoiceMode = { open: false, rec: null, listening: false, wantListen: false, silenceTimer: null, heard: '' };
function faNum(n) { return String(n).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]); }
function vcSupport() {
  try { return !!(window.SpeechRecognition || window.webkitSpeechRecognition); } catch (e) { return false; }
}
function vibrate(ms) { try { if (ENV === 'android' && typeof AndroidAI !== 'undefined' && AndroidAI.vibrate) AndroidAI.vibrate(ms); } catch (e) {} }
function vcSetState(st) {
  const orb = $('#vc-orb');
  if (orb) orb.dataset.state = st;
  const lbl = $('#vc-state');
  const names = {
    idle: 'آمادهٔ گفتگو — دکمهٔ میکروفون را بزن و حرف بزن',
    listening: 'دارم گوش می‌دهم… حرف بزن',
    thinking: 'دارم فکر می‌کنم…',
    speaking: 'دارم حرف می‌زنم…'
  };
  if (lbl) lbl.textContent = names[st] || '';
  const dot = $('#vc-live-dot');
  if (dot) dot.className = 'dot ' + (st === 'idle' ? 'dot-off' : 'dot-on');
  const mic = $('#btn-vc-mic');
  if (mic) mic.classList.toggle('listening', st === 'listening');
}
function vcEchoHeard(t) {
  if (!settings.vcTranscript) return;
  const box = $('#vc-heard');
  if (box) box.textContent = t || '';
}
function vcEchoReply(t) {
  if (!settings.vcTranscript) return;
  const box = $('#vc-reply');
  if (box) box.textContent = String(t || '').slice(0, 400);
}
function openVoiceMode() {
  const bd = $('#voice-backdrop');
  if (!bd) return;
  bd.classList.remove('hidden');
  bd.dataset.vtheme = settings.vmTheme || 'violet';
  VoiceMode.open = true;
  vcSetState('idle');
  vcEchoHeard('');
  $('#vc-reply').innerHTML = '<span class="vc-hint">پاسخ سوکوت همین‌جا می‌آید و با صدای ابری خوانده می‌شود…</span>';
  const unsup = $('#vc-unsupported');
  if (!vcSupport()) {
    unsup.classList.remove('hidden');
    $('#vc-unsupported-txt').textContent = 'این دستگاه تشخیص گفتار ندارد (در اندروید، برنامهٔ Google لازم است) — با کیبورد بنویس؛ جواب باز هم با صدای ابری خوانده می‌شود.';
  } else {
    unsup.classList.add('hidden');
    startListening();
  }
}
function closeVoiceMode() {
  VoiceMode.open = false;
  VoiceMode.wantListen = false;
  stopListening();
  stopSpeak();
  const bd = $('#voice-backdrop');
  if (bd) bd.classList.add('hidden');
}
function startListening() {
  if (!VoiceMode.open || !vcSupport() || VoiceMode.listening) return;
  stopSpeak(); /* گوش دادن و حرف زدن هم‌زمان ممکن نیست */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  let rec;
  try { rec = new SR(); } catch (e) { return; }
  rec.lang = settings.vmLang || 'fa-IR';
  rec.continuous = true;
  rec.interimResults = true;
  VoiceMode.rec = rec;
  VoiceMode.heard = '';
  vcEchoHeard('…');
  rec.onresult = (ev) => {
    let interim = '', finalTxt = '';
    for (let i = ev.resultIndex; i < ev.results.length; i++) {
      const t = ev.results[i][0].transcript;
      if (ev.results[i].isFinal) finalTxt += t; else interim += t;
    }
    const shown = fixPersian((finalTxt || interim).trim());
    if (shown) vcEchoHeard(shown);
    if (finalTxt.trim()) {
      VoiceMode.heard = (VoiceMode.heard + ' ' + finalTxt.trim()).trim();
      /* ارسال خودکار بعد از سکوت — طول تأخیر در تنظیمات گفتگوی صوتی */
      clearTimeout(VoiceMode.silenceTimer);
      VoiceMode.silenceTimer = setTimeout(finishVoiceTurn, (Number(settings.vcAutoSend) || 1.5) * 1000);
    }
  };
  rec.onerror = (ev) => {
    if (ev.error === 'not-allowed' || ev.error === 'service-not-allowed') {
      const unsup = $('#vc-unsupported');
      if (unsup) {
        unsup.classList.remove('hidden');
        const t = $('#vc-unsupported-txt');
        if (t) t.textContent = 'دسترسی میکروفون داده نشد. اجازهٔ میکروفون را بده یا با کیبورد بنویس — جواب با صدای ابری خوانده می‌شود.';
      }
      VoiceMode.wantListen = false;
    }
  };
  rec.onend = () => {
    VoiceMode.listening = false;
    if (VoiceMode.wantListen && VoiceMode.open && !VoiceMode.busy) {
      try { rec.start(); VoiceMode.listening = true; } catch (e) {}
    }
  };
  VoiceMode.wantListen = true;
  try { rec.start(); VoiceMode.listening = true; vcSetState('listening'); vibrate(30); } catch (e) {}
}
function stopListening() {
  clearTimeout(VoiceMode.silenceTimer);
  VoiceMode.wantListen = false;
  try { if (VoiceMode.rec) VoiceMode.rec.stop(); } catch (e) {}
  VoiceMode.rec = null;
  VoiceMode.listening = false;
}
function finishVoiceTurn() {
  const text = (VoiceMode.heard || '').trim();
  vcEchoHeard('');
  if (!text) { startListening(); return; }
  if (sendLock) { /* پاسخ قبلی هنوز در راه است — این نوبت را گم نکن */
    toast('پاسخ قبلی هنوز در راه است — صبر کن…', true);
    VoiceMode.heard = text;
    clearTimeout(VoiceMode.silenceTimer);
    VoiceMode.silenceTimer = setTimeout(finishVoiceTurn, 1500);
    return;
  }
  stopListening();
  vcSetState('thinking');
  vibrate(20);
  send(text); /* همان خط اصلی گفتگو — تاریخچه هم ذخیره می‌شود */
}

/* ---------- state ---------- */
let settings = loadSettings();
let chats = loadChats();
memories = loadMemories();
let currentId = chats.length ? chats[0].id : null;
let activeStream = null;
let sendLock = false;

/* ---------- UI: chats ---------- */
function currentChat() { return chats.find((c) => c.id === currentId) || null; }

function newChat() {
  const c = { id: uid(), title: 'گفتگوی جدید', msgs: [] };
  chats.unshift(c); currentId = c.id;
  saveChats(chats); renderChatList(); renderMessages();
  $('#input').focus();
  if (window.innerWidth <= 760) $('#sidebar').classList.add('hidden');
}
function openChat(id) {
  currentId = id;
  renderChatList(); renderMessages();
  if (window.innerWidth <= 760) $('#sidebar').classList.add('hidden');
}
function deleteChat(id, ev) {
  ev.stopPropagation();
  chats = chats.filter((c) => c.id !== id);
  if (currentId === id) currentId = chats.length ? chats[0].id : null;
  saveChats(chats); renderChatList(); renderMessages();
}

function renderChatList() {
  const el = $('#chat-list');
  el.innerHTML = '';
  for (const c of chats) {
    const d = document.createElement('div');
    d.className = 'chat-item' + (c.id === currentId ? ' active' : '');
    d.innerHTML =
      '<svg class="ic"><use href="#i-chat"/></svg>' +
      '<span class="title">' + esc(c.title) + '</span>' +
      '<button class="del" title="حذف گفتگو"><svg class="ic"><use href="#i-trash"/></svg></button>';
    d.addEventListener('click', () => openChat(c.id));
    d.querySelector('.del').addEventListener('click', (e) => deleteChat(c.id, e));
    el.appendChild(d);
  }
}

/* ---------- UI: messages ---------- */
function addMsgDom(role, html, id) {
  const w = document.createElement('div');
  w.className = 'msg ' + (role === 'user' ? 'user' : 'bot');
  w.innerHTML =
    '<div class="avatar">' +
    (role === 'user'
      ? '<svg class="ic"><use href="#i-user"/></svg>'
      : '<img src="img/hero.jpg" alt="">') +
    '</div>' +
    '<div class="bubble-wrap" style="min-width:0">' +
    '<div class="bubble"' + (id ? ' id="' + id + '"' : '') + '>' + html + '</div>' +
    (role === 'bot'
      ? '<div class="meta">' +
        '<button class="speak-btn" title="خواندن با صدای ابری"><svg class="ic ic-sm"><use href="#i-speak"/></svg></button>' +
        '<button class="copy-btn"><svg class="ic ic-sm"><use href="#i-copy"/></svg><span> کپی پاسخ</span></button>' +
        '<span class="brain-tag hidden"><svg class="ic ic-sm"><use href="#i-chip"/></svg><span class="bt-txt"></span></span>' +
        '<span class="src-chip hidden"><svg class="ic ic-sm"><use href="#i-globe"/></svg><span class="src-txt"></span></span>' +
        '</div>'
      : '') +
    '</div>';
  if (role === 'bot') {
    const bubble = w.querySelector('.bubble');
    w.querySelector('.copy-btn').addEventListener('click', () => {
      copyText(bubble.innerText, () => {
        const b = w.querySelector('.copy-btn');
        b.innerHTML = '<svg class="ic ic-sm"><use href="#i-check"/></svg><span> کپی شد</span>';
        setTimeout(() => { b.innerHTML = '<svg class="ic ic-sm"><use href="#i-copy"/></svg><span> کپی پاسخ</span>'; }, 1600);
      });
    });
    w.querySelector('.speak-btn').addEventListener('click', () => {
      speak(w.dataset.raw || bubble.innerText, w.querySelector('.speak-btn'));
    });
  }
  $('#messages').appendChild(w);
  return w;
}

function errorHTML(msg) {
  /* در نسخهٔ وب اگر اتصال ممکن نشد (CORS مرورگر)، کارت راهنمای کامل نشان بده */
  if (ENV === 'web' && /خطای شبکه|CORS/.test(String(msg))) {
    return '<div class="net-help">' +
      '<p style="color:var(--err);display:flex;align-items:center;gap:8px;margin:0 0 8px">' +
      '<svg class="ic ic-sm" style="color:var(--err)"><use href="#i-alert"/></svg><span>' + esc(msg) + '</span></p>' +
      '<p style="margin:4px 0;font-weight:bold">نسخهٔ وب به‌دلیل سیاست امنیتی مرورگرها (CORS) نمی‌تواند مستقیماً به کلادفلر وصل شود. دو راه‌حل:</p>' +
      '<ol style="margin:4px 0;padding-right:18px"><li>اپ <b>اندروید</b> یا <b>ویندوز</b> سوکوت را نصب کن — بدون هیچ محدودیتی مستقیم وصل می‌شود (لینک دانلود: بخش «درباره» یا کانال تلگرام).</li>' +
      '<li>یا در تنظیمات، سرویس <b>«پولینیشن — رایگان بدون کلید»</b> را انتخاب کن؛ نسخهٔ وب با آن بدون مشکل CORS حرف می‌زند و ساخت عکس هم بدون کلید کار می‌کند.</li>'
      '<li>یا Worker واسط را روی حسابت مستقر کن و آدرسش را در تنظیمات، فیلد «آدرس API» بگذار (فایل <span class="en" dir="ltr">worker/worker.js</span> در مخزن GitHub + راهنمای ۴ مرحله‌ای در README).</li></ol></div>';
  }
  return '<p style="color:var(--err);display:flex;align-items:center;gap:8px">' +
    '<svg class="ic ic-sm" style="color:var(--err)"><use href="#i-alert"/></svg><span>' + esc(msg) + '</span></p>';
}

function showSources(w, results) {
  const chip = w.querySelector('.src-chip');
  if (!chip || !results) return;
  chip.querySelector('.src-txt').textContent = 'جستجوی وب · ' + results.length + ' منبع';
  chip.classList.remove('hidden');
  chip.title = results.map((r, i) => '[' + (i + 1) + '] ' + r.title).join('\n');
}

function renderMessages() {
  const c = currentChat();
  $('#messages').innerHTML = '';
  const empty = !c || c.msgs.length === 0;
  $('#welcome').classList.toggle('hidden', !empty);
  if (empty) return;
  for (const m of c.msgs) {
    if (m.r === 'user') {
      const im = (m.imgs || []).map((s) => ({ thumb: s }));
      const fs = (m.files || []).map((n) => ({ name: n }));
      addMsgDom('user', userMsgHTML(m.c, im, fs, m.gen));
    }
    else if (m.img) {
      const w = addMsgDom('bot', genImgHTML(m));
      w.querySelector('.img-save').addEventListener('click', () => saveGeneratedImage(m.img));
      w.querySelector('.img-open').addEventListener('click', () => openImageSrc(m.img));
    }
    else {
      const v = fixPersian(stripThink(m.c).text) || '[پاسخی ثبت نشد]';
      const w = addMsgDom('bot', renderMD(v));
      w.dataset.raw = v;
    }
  }
  scrollBottom(true);
}
function scrollBottom(force) {
  const el = $('#messages');
  const near = el.scrollHeight - el.scrollTop - el.clientHeight < 140;
  if (near || force) el.scrollTop = el.scrollHeight;
}

/* ---------- پیوست‌ها: آپلود فایل و عکس ---------- */
let pendingAttach = [];
const MAX_ATTACH = 4;
const IMG_API_MAX = 1024;   /* ابعاد تصویری که به مدل می‌رود */
const IMG_THUMB_MAX = 256;  /* تصویر کوچک ذخیره‌شده در تاریخچه */
const TEXT_FILE_RE = /\.(txt|md|markdown|json|csv|tsv|log|xml|yml|yaml|html|htm|css|js|mjs|ts|jsx|tsx|py|java|kt|c|h|cpp|cs|php|rb|go|rs|swift|sql|sh|bat|ini|toml|env|svg|srt|vtt)$/i;
const TEXT_TYPE_RE = /^text\/|json|xml|javascript|typescript|x-sh|csv/i;

function canvasResize(img, max, q) {
  const scale = Math.min(1, max / Math.max(img.width, img.height));
  const w = Math.max(1, Math.round(img.width * scale));
  const h = Math.max(1, Math.round(img.height * scale));
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const ctx = cv.getContext('2d');
  ctx.drawImage(img, 0, 0, w, h);
  return cv.toDataURL('image/jpeg', q);
}

function processFiles(list) {
  const files = Array.prototype.slice.call(list || []);
  for (const f of files) {
    if (pendingAttach.length >= MAX_ATTACH) { toast('حداکثر ' + MAX_ATTACH + ' پیوست در هر پیام', true); break; }
    const isImg = /^image\//.test(f.type) && !/svg|gif/i.test(f.type);
    if (isImg) {
      const rd = new FileReader();
      rd.onload = () => {
        const img = new Image();
        img.onload = () => {
          pendingAttach.push({ kind: 'image', name: f.name || 'تصویر', api: canvasResize(img, IMG_API_MAX, 0.85), thumb: canvasResize(img, IMG_THUMB_MAX, 0.72) });
          renderAttachBar();
          toast('عکس پیوست شد — مدل بینا خودکار انتخاب می‌شود');
        };
        img.onerror = () => toast('تصویر «' + f.name + '» خوانده نشد', true);
        img.src = rd.result;
      };
      rd.readAsDataURL(f);
    } else if (TEXT_FILE_RE.test(f.name || '') || TEXT_TYPE_RE.test(f.type || '')) {
      if (f.size > 400 * 1024) { toast('فایل «' + f.name + '» بزرگ‌تر از ۴۰۰KB است', true); continue; }
      const rd = new FileReader();
      rd.onload = () => {
        pendingAttach.push({ kind: 'file', name: f.name, text: String(rd.result).slice(0, 60000) });
        renderAttachBar();
        toast('فایل پیوست شد — محتوایش برای سوکوت خوانده می‌شود');
      };
      rd.readAsText(f);
    } else {
      toast('فرمت «' + (f.name || f.type) + '» پشتیبانی نمی‌شود — عکس یا فایل متنی بفرست', true);
    }
  }
}

function renderAttachBar() {
  const bar = $('#attach-bar');
  if (!bar) return;
  if (!pendingAttach.length) { bar.innerHTML = ''; bar.classList.add('hidden'); return; }
  bar.classList.remove('hidden');
  bar.innerHTML = pendingAttach.map((a, i) =>
    '<span class="attach-chip' + (a.kind === 'image' ? ' is-img' : '') + '">' +
    (a.kind === 'image'
      ? '<img src="' + a.thumb + '" alt="">'
      : '<svg class="ic"><use href="#i-doc"/></svg>') +
    '<span class="nm">' + esc(a.name) + '</span>' +
    '<button type="button" data-i="' + i + '" title="حذف پیوست"><svg class="ic ic-sm"><use href="#i-x"/></svg></button>' +
    '</span>'
  ).join('');
  bar.querySelectorAll('button').forEach((b) => {
    b.addEventListener('click', () => { pendingAttach.splice(+b.dataset.i, 1); renderAttachBar(); });
  });
}
function clearAttach() { pendingAttach = []; renderAttachBar(); }

function userMsgHTML(text, imgAtts, fileAtts, gen) {
  let h = '';
  if (gen) h += '<p><span class="gen-badge"><svg class="ic ic-sm"><use href="#i-image"/></svg>درخواست ساخت عکس</span></p>';
  if (imgAtts && imgAtts.length) {
    h += '<div class="att-grid">' + imgAtts.map((a) => '<img class="att-img" src="' + (a.thumb || a) + '" alt="تصویر پیوست" loading="lazy">').join('') + '</div>';
  }
  if (fileAtts && fileAtts.length) {
    h += '<div class="att-files">' + fileAtts.map((a) => '<span class="att-file"><svg class="ic ic-sm"><use href="#i-doc"/></svg><span>' + esc(a.name || a) + '</span></span>').join('') + '</div>';
  }
  if (text) h += '<p>' + esc(text) + '</p>';
  return h;
}

/* ---------- send / stream ---------- */
function setBusy(b) {
  $('#btn-send').classList.toggle('busy', b);
  $('#btn-send').title = b ? 'توقف' : 'ارسال';
}

function buildHistory(c) {
  const clean = c.msgs
    .filter((m) => {
      const t = String(m.c || '');
      if (m.r === 'assistant' && (t.indexOf('[خطا]') === 0 || /chat\.completion\.chunk|^\s*data:\s*\{/.test(t))) return false;
      return true;
    })
    .map((m) => ({
      role: m.r === 'user' ? 'user' : 'assistant',
      content: (String(m.c || '') +
        (m.r === 'user' && m.files && m.files.length ? '\n[فایل‌های پیوست در این نوبت: ' + m.files.join('، ') + ']' : '') +
        (m.r === 'user' && m.imgs && m.imgs.length ? ' [کاربر ' + m.imgs.length + ' تصویر پیوست کرد]' : '')).slice(0, 3000)
    }));
  /* long memory window: keep last 24 messages inside a ~30k char budget */
  const win = clean.slice(-24);
  let budget = 30000;
  const out = [];
  for (let i = win.length - 1; i >= 0; i--) {
    const len = win[i].content.length;
    if (budget - len < 0) break;
    budget -= len;
    out.unshift(win[i]);
  }
  return out;
}

function toolNoteHTML(txt) {
  return '<div class="tool-note"><svg class="ic"><use href="#i-wrench"/></svg><span>' + esc(txt) + '</span></div>';
}

/* تشخیص پاسخ بریده‌شده: تعداد فرد بلوک‌های ``` یعنی کد نصفه مانده */
function looksTruncated(t) {
  const s = String(t || '');
  return (s.match(/```/g) || []).length % 2 === 1;
}

const TOOL_LABELS = { web_search: 'جستجوی وب', calculator: 'ماشین‌حساب', now: 'زمان اکنون', fetch_page: 'خواندن صفحه' };

async function send(textRaw) {
  if (sendLock) return;
  const text = (textRaw !== undefined ? textRaw : $('#input').value).trim();
  const atts = pendingAttach.slice();
  if (!text && !atts.length) return;

  const p0 = PROVIDERS[settings.provider] || PROVIDERS.cloudflare;
  const needToken = p0.needsToken !== false;
  const needAccount = p0.needsAccount && !(settings.base || '').trim();
  if ((needToken && !settings.token.trim()) || (needAccount && !settings.account.trim())) { openSettings(); return; }
  if (!chosenModel() && p0.needsToken !== false) { openSettings(); return; }

  /* — حالت ساخت عکس: مثل ChatGPT عکس می‌سازد — */
  if (settings.imageMode) { await sendImage(text); return; }

  /* مغز: learn from the user's message */
  const learned = extractMemories(text);
  if (learned > 0) {
    toast(learned === 1 ? 'یادداشت جدید در مغز سوکوت ذخیره شد' : learned + ' یادداشت جدید در مغز سوکوت ذخیره شد');
  }

  let c = currentChat();
  if (!c) { newChat(); c = currentChat(); }
  $('#welcome').classList.add('hidden');
  if (c.msgs.length === 0) { c.title = text.slice(0, 32); renderChatList(); }

  const imgAtts = atts.filter((a) => a.kind === 'image');
  const fileAtts = atts.filter((a) => a.kind === 'file');
  c.msgs.push({ r: 'user', c: text, imgs: imgAtts.map((a) => a.thumb), files: fileAtts.map((a) => a.name) });
  addMsgDom('user', userMsgHTML(text, imgAtts, fileAtts));
  clearAttach();
  $('#input').value = ''; autoGrow();
  saveChats(chats);
  scrollBottom(true);

  sendLock = true;
  setBusy(true);

  const botId = 'bot-' + uid();
  const w = addMsgDom('bot', '<span class="typing"><i></i><i></i><i></i></span>', botId);
  scrollBottom(true);
  /* v1.14.0: شمارندهٔ ثانیه روی حبابِ «در حال نوشتن» — کاربر می‌بیند برنامه زنده است */
  const t0 = Date.now();
  const tTick = setInterval(() => {
    const tb = w.querySelector('.typing');
    if (!tb) { clearInterval(tTick); return; }
    const sec = Math.floor((Date.now() - t0) / 1000);
    if (sec >= 3) tb.innerHTML = '<i></i><i></i><i></i><span class="t-sec">' + faNum(sec) + ' ثانیه…</span>';
  }, 1000);

  /* پیام‌های محلی این نوبت (تبادل ابزار فقط همین‌جا می‌ماند و ذخیره نمی‌شود) */
  /* v1.15.0: پارامترهای مؤثر همین مدل — خلاقیت/سهم توکن/TopP/دستور اختصاصی */
  const mp = modelParams();
  const messages = [{ role: 'system', content: buildSystemPrompt(null, mp.sys) }].concat(buildHistory(c));

  /* — پیوست‌ها: فایل متنی داخل متن + تصویر به‌صورت image_url برای مدل بینا — */
  let visionNote = null;
  if (atts.length) {
    const fileChunks = fileAtts.map((a) => '📎 فایل پیوست «' + a.name + '»:\n' + a.text).join('\n\n');
    const userText = (text || '') + (fileChunks ? '\n\n' + fileChunks : '');
    let content = userText;
    if (imgAtts.length) {
      if (settings.provider === 'dahl') {
        /* سرویس دال فعلاً بینایی ندارد (تست واقعی: image_url پشتیبانی نمی‌شود) — متن پیام حفظ می‌شود */
        visionNote = 'سرویس فعلی دیدن عکس را ساپورت نمی‌کند؛ متن پیام‌ات را خواندم و بر همان اساس جواب می‌دهم.';
      } else if (settings.provider === 'cloudflare' && !isVision(chosenModel())) {
        settings.model = DEFAULT_VISION_MODEL;
        saveSettings(settings); refreshStatus();
        visionNote = 'تصویر فرستادی؛ برای دیدنش خودکار به مدل بینا «' + prettyModel(DEFAULT_VISION_MODEL) + '» سوئیچ کردم.';
      } else if (settings.provider === 'freemodel' && FM_VISION.indexOf(chosenModel()) === -1) {
        /* فری‌مدل: خودکار به نزدیک‌ترین مدل بینای همان سرویس سوئیچ کن */
        settings.model = FM_DEFAULT_VISION;
        saveSettings(settings); refreshStatus();
        visionNote = 'تصویر فرستادی؛ خودکار به مدل بینای فری‌مدل «' + prettyModel(FM_DEFAULT_VISION) + '» سوئیچ کردم.';
      } else if (settings.provider === 'coarena' && COA_VISION.indexOf(chosenModel()) === -1) {
        /* کوآرنا: همهٔ مدل‌ها بینا هستند (تست واقعی ✓) — این شاخه فقط برای اطمینان است */
        settings.model = COA_DEFAULT_VISION;
        saveSettings(settings); refreshStatus();
        visionNote = 'تصویر فرستادی؛ خودکار به مدل بینای کوآرنا «' + prettyModel(COA_DEFAULT_VISION) + '» سوئیچ کردم.';
      }
      content = [{ type: 'text', text: userText }].concat(imgAtts.map((a) => ({ type: 'image_url', image_url: { url: a.api } })));
    }
    messages[messages.length - 1] = { role: 'user', content: content };
    if (visionNote) w.querySelector('.bubble').innerHTML = toolNoteHTML(visionNote);
  }

  /* — جستجوی پیش‌دستانه + قیمت لحظه‌ای دلار/ارز/کریپتو از API مستقیم — */
  let searchResults = null;
  if (shouldSearch(text) || PRICE_HINTS.test(text)) {
    const botId0 = 'bot-' + uid();
    const w0 = addMsgDom('bot', '<div class="searching-note"><svg class="ic"><use href="#i-globe"/></svg><span>در حال جستجوی وب برای اطلاعات تازه…</span></div>', botId0);
    scrollBottom(true);
    let priceRes = [];
    if (PRICE_HINTS.test(text)) {
      try { priceRes = await priceData(text); } catch (e) { priceRes = []; }
    }
    let webRes = [];
    try { webRes = await webSearch(text); } catch (e) { webRes = []; }
    w0.remove();
    const all = priceRes.concat(webRes || []);
    if (all.length) {
      searchResults = all;
      messages[0].content = buildSystemPrompt({ query: text, results: all }, mp.sys);
    } else {
      toast('جستجوی وب نتیجه‌ای نداشت — با دانش خودم پاسخ می‌دهم', true);
    }
  }

  const style = STYLES[settings.style] || STYLES.detailed;
  let maxTokens = style.max_tokens;
  /* v1.15.0: اگر سهم اختصاصی توکن/فکر در «پارامترهای مدل» تنظیم شده باشد، اولویت دارد */
  if (mp.maxTok > 0) maxTokens = mp.maxTok;
  /* مدل‌های استدلالی دال و کوآرنا فکرشان را از سهم max_tokens مصرف می‌کنند — سهم کمتر از حداقل کافی نیست */
  const willUseDahl = settings.provider === 'dahl' || settings.provider === 'coarena';
  if (willUseDahl) maxTokens = Math.max(maxTokens, DAHL_MIN_TOKENS);

  const renderAcc = (rawAcc) => {
    const v = stripThink(rawAcc);
    const bubble = w.querySelector('.bubble');
    if (v.thinking) {
      bubble.innerHTML = '<div class="thinking-note"><svg class="ic"><use href="#i-chip"/></svg><span>دارم عمیق فکر می‌کنم…</span></div>';
    } else if (v.text) {
      const shown = fixPersian(v.text);
      bubble.innerHTML = renderMD(shown);
      w.dataset.raw = shown;
    } else {
      bubble.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
    }
    scrollBottom(false);
  };

  /* — حلقهٔ عامل: حداکثر ۶ دور (ابزار / ادامهٔ پاسخ بریده / فالبک مدل / سوییچ سرویس) — */
  let full = '';
  let finalErr = null;
  let fellBack = false;
  let reasoningRetried = false;
  const busyTried = {}; /* v1.10.1: مغزهای جایگزینِ امتحان‌شده در شلوغی — از حلقه بی‌نهایت جلوگیری می‌کند */
  let overrideModel = null; /* v1.10.1: مغز جایگزین موقت برای همین پیام — تنظیمات کاربر عوض نمی‌شود */
  const chain = providerChain();
  let ci = 0;
  activeProvider = chain[0];
  for (let round = 0; round < 6; round++) {
    let acc = '';
    finalErr = await new Promise((resolve) => {
      const body = {
        model: overrideModel || chosenModel(activeProvider), stream: true,
        temperature: mp.temp,        /* v1.15.0: خلاقیت از پنل پارامترها */
        top_p: mp.topP,              /* v1.15.0: تنوع خروجی از پنل پارامترها */
        max_tokens: maxTokens,       /* v1.15.0: سهم فکر/پاسخ از پنل پارامترها */
        messages: messages
      };
      activeStream = streamRequest(apiUrl(activeProvider), apiHeaders(activeProvider), body,
        (delta) => { acc += delta; renderAcc(stripThink(full + acc).thinking ? full + acc : acc); },
        (err) => { activeStream = null; resolve(err); }
      );
    });

    /* اگر سقف طول پاسخ مدل را رد کرد، نصف کن و همان دور را دوباره بگیر */
    if (finalErr && /طول پاسخ|max_tokens/i.test(finalErr) && maxTokens > 900) {
      maxTokens = Math.max(900, Math.floor(maxTokens / 2));
      round--; continue;
    }

    /* مدل استدلالی فکر کرد، سهم توکن تمام شد ولی جوابی نیامد؟
       یک بار با سهم بزرگ‌تر ادامه بده (تست واقعی دال: با ۱۰۰ توکن فقط فکر می‌آید) */
    if (!finalErr && !stripThink(acc).text && (activeProvider === 'dahl' || activeProvider === 'coarena') && !reasoningRetried) {
      reasoningRetried = true;
      maxTokens = Math.min(mp.maxTok > 0 ? mp.maxTok : 8192, Math.max(DAHL_MIN_TOKENS, maxTokens * 2));
      w.querySelector('.bubble').innerHTML = toolNoteHTML('مدل در حال فکر کردن بوده و سهم پاسخ تمام شده — خودکار با سهم بزرگ‌تر ادامه می‌دهم…');
      scrollBottom(false);
      round--; continue;
    }

    /* v1.10.1: مغز انتخابی لحظه‌ای شلوغ بود (model_concurrency دال)؟
       اول خودکار با مغزِ آزادِ همان سرویس ادامه بده؛ اگر هیچ‌کدام آزاد نبود، سرویس رایگان */
    if (finalErr && finalErr.indexOf('[model-busy]') !== -1) {
      const dead = overrideModel || chosenModel(activeProvider);
      busyTried[dead] = true;
      const dahlIds = Object.keys(PROVIDERS.dahl.models);
      const alt = (BUSY_ALT_MODELS || []).find((id) => id !== dead && dahlIds.indexOf(id) !== -1 && !busyTried[id]);
      if (activeProvider === 'dahl' && alt) {
        busyTried[alt] = true;
        overrideModel = alt;
        w.querySelector('.bubble').innerHTML = toolNoteHTML('مغز «' + prettyModel(dead) + '» همین لحظه شلوغ است — خودکار با مغز آزاد «' + prettyModel(alt) + '» ادامه می‌دهم…');
        scrollBottom(false);
        round--; continue;
      }
      if (ci < chain.length - 1) {
        overrideModel = null;
        ci++;
        activeProvider = chain[ci];
        w.querySelector('.bubble').innerHTML = toolNoteHTML('همهٔ مغزهای «' + (PROVIDERS.dahl || {}).name + '» همین لحظه شلوغ‌اند — سوییچ خودکار به سرویس رایگان «' + (PROVIDERS[activeProvider] || {}).name + '»…');
        scrollBottom(false);
        round--; continue;
      }
      /* آخر زنجیره بودیم — خطا را همان‌طور که هست نشان بده */
    }

    /* مدل در دسترس نبود (بازنشسته/لایسنس/پلن)؟ یک بار خودکار با مدل پایدار ادامه بده */
    if (finalErr && finalErr.indexOf('[model-unavailable]') !== -1 && !fellBack) {
      fellBack = true;
      const dead = chosenModel(activeProvider);
      const alt = fallbackModel(dead);
      if (activeProvider === 'cloudflare') {
        settings.model = alt;
        saveSettings(settings); refreshStatus();
      }
      w.querySelector('.bubble').innerHTML = toolNoteHTML('مدل «' + prettyModel(dead) + '» روی این سرویس در دسترس نبود — خودکار با «' + prettyModel(alt) + '» ادامه می‌دهم…');
      scrollBottom(false);
      round--; continue;
    }

    /* موجودی/دسترسی/اتصال سرویس خراب؟ سوییچ خودکار به سرویس بعدی زنجیره */
    if (finalErr && (finalErr.indexOf('[provider-quota]') !== -1 || /خطای شبکه|اتصال به سرور/i.test(finalErr)) && ci < chain.length - 1) {
      ci++;
      activeProvider = chain[ci];
      w.querySelector('.bubble').innerHTML = toolNoteHTML('سوییچ خودکار به سرویس «' + (PROVIDERS[activeProvider] || {}).name + '» — دارم جواب را از راه رایگان می‌گیرم…');
      scrollBottom(false);
      round--; continue;
    }

    const v = stripThink(acc);
    if (finalErr || !v.text) { full += v.text || ''; break; }

    /* ۱) مدل ابزار خواست؟ اجرا کن و نتیجه را بده */
    const toolCall = parseToolCall(v.text);
    if (toolCall && TOOL_LABELS[toolCall.tool] && round < 3) {
      const q = toolCall.query || toolCall.expression || toolCall.url || '';
      w.querySelector('.bubble').innerHTML = toolNoteHTML('دارم کار انجام می‌دهم: ' + TOOL_LABELS[toolCall.tool] + (q ? ' («' + q + '»)' : '') + '…');
      scrollBottom(false);
      const result = await runTool(toolCall);
      messages.push({ role: 'assistant', content: v.text });
      messages.push({ role: 'user', content: 'نتیجهٔ ابزار «' + toolCall.tool + '»:\n' + result + '\n\nحالا با استفاده از این نتیجه، پاسخ نهایی کامل و فارسی را بده (بدون JSON).' });
      continue;
    }

    full += v.text;

    /* ۲) پاسخ بریده شد (کد بلند نیمه‌کاره)؟ ادامه بگیر */
    if (looksTruncated(full) && round < 3) {
      renderAcc(full);
      w.querySelector('.bubble').insertAdjacentHTML('beforeend', toolNoteHTML('پاسخ بلند است؛ دارم ادامه‌اش را می‌نویسم…'));
      scrollBottom(false);
      messages.push({ role: 'assistant', content: v.text });
      messages.push({ role: 'user', content: 'پاسخ قبلی‌ات ناقص بریده شد. دقیقاً از همان‌جا که برید ادامه بده؛ چیزی که نوشته‌ای را تکرار نکن و ادامهٔ آن را بنویس.' });
      continue;
    }
    break;
  }

  activeStream = null; setBusy(false); sendLock = false;
  clearInterval(tTick);
  const usedProvider = activeProvider;
  const usedModel = overrideModel || chosenModel(usedProvider);
  activeProvider = null; /* نوبت بعد: سرویس اصلی کاربر */
  const bubble = w.querySelector('.bubble');
  let vFinal = stripThink(full).text;
  if (searchResults && searchResults.length && vFinal && !/منابع|source/i.test(vFinal)) {
    vFinal += '\n\n**منابع:**\n' + searchResults.slice(0, 6).map((r, i) => '- [' + (i + 1) + '] [' + r.title + '](' + r.url + ')').join('\n');
  }
  const finalText = fixPersian(vFinal || '');
  let provNote = '';
  if (usedProvider && usedProvider !== settings.provider && !finalErr && finalText.trim()) {
    provNote = '<p class="prov-note"><svg class="ic ic-sm"><use href="#i-bolt"/></svg><span>این پاسخ با سرویس «' + esc((PROVIDERS[usedProvider] || {}).name || '') + '» داده شد (سوییچ خودکار).</span></p>';
  }
  /* v1.10.1: اگر با مغز جایگزین جواب آمد، صادقانه بگو با کدام مغز جواب گرفته */
  if (overrideModel && !finalErr && finalText.trim()) {
    provNote += '<p class="prov-note"><svg class="ic ic-sm"><use href="#i-chip"/></svg><span>مغز «' + esc(prettyModel(usedProvider === 'dahl' ? chosenModel('dahl') : usedModel)) + '» همین لحظه شلوغ/در دسترس نبود؛ این پاسخ با مغز جایگزین «' + esc(prettyModel(overrideModel)) + '» داده شد — پیام بعدی دوباره مغز اصلی را امتحان می‌کنم.</span></p>';
  }
  if (finalErr) {
    if (!finalText.trim()) bubble.innerHTML = errorHTML(finalErr);
    else bubble.innerHTML = renderMD(finalText) + provNote + '<p style="color:var(--err);font-size:12px;margin-top:6px">' + esc(finalErr) + '</p>';
  } else if (!finalText.trim()) {
    bubble.innerHTML = errorHTML('پاسخی دریافت نشد — مدل و تنظیمات اتصال را در تنظیمات بررسی کنید.');
  } else {
    bubble.innerHTML = renderMD(finalText) + provNote;
  }
  if (searchResults) showSources(w, searchResults);
  w.dataset.raw = finalText;
  /* v1.14.0: چیپ «با مغز …» — مدلِ واقعیِ پاسخ‌دهنده همیشه دیده می‌شود (رفع شکِ «روی GLM ماند») */
  const brainTag = w.querySelector('.brain-tag');
  if (brainTag && usedProvider && finalText.trim()) {
    const btTxt = brainTag.querySelector('.bt-txt');
    if (btTxt) btTxt.textContent = 'با مغز ' + prettyModel(usedModel) + ' · ' + (PROV_SHORT[usedProvider] || (PROVIDERS[usedProvider] || {}).name || '');
    brainTag.classList.remove('hidden');
  }
  c.msgs.push({ r: 'assistant', c: (finalText || '[خطا] ' + (finalErr || '')).slice(0, 20000) });
  saveChats(chats);
  scrollBottom(false);
  if (!finalErr && finalText.trim()) {
    if (VoiceMode.open) {
      /* گفتگوی صوتی زنده: پاسخ خوانده می‌شود و چرخه گوش‌دادن ادامه پیدا می‌کند */
      vcEchoReply(finalText);
      speak(finalText, w.querySelector('.speak-btn'), {
        onState: (st) => vcSetState(st),
        onDone: () => { vcSetState('idle'); if (settings.vcLoop) setTimeout(startListening, 350); }
      });
    } else if (settings.autoSpeak) {
      speak(finalText, w.querySelector('.speak-btn'));
    }
  }
}

function stopStream() {
  if (activeStream) { activeStream.stop(); }
}

/* ---------- categories UI ---------- */
function catLabel(id) { return (CATEGORIES[id] || CATEGORIES.general).name; }
function applyCat(id, silent) {
  const c = CATEGORIES[id];
  if (!c) return;
  settings.cat = id;
  const cf = (settings.provider || 'cloudflare') === 'cloudflare';
  if (cf) settings.model = c.model; /* مدل‌های پیش‌فرض دستیارها برای کلادفلر است */
  settings.temp = c.temp;
  settings.style = c.style;
  settings.webSearch = c.web;
  settings.autoSpeak = c.autoSpeak;
  settings.modelPicked = true;
  saveSettings(settings);
  refreshStatus(); updateWebBtn(); markCatCards();
  const extra = cf ? ' — مدل: ' + prettyModel(c.model) : ' (مدل فعلی ' + prettyModel(chosenModel()) + ' حفظ شد)';
  if (!silent) toast('حالت «' + c.name + '» فعال شد' + extra);
}
function markCatCards() {
  document.querySelectorAll('.cat-card').forEach((b) => {
    b.classList.toggle('active', b.dataset.cat === settings.cat);
  });
}
function refreshCatBadge() {
  const c = CATEGORIES[settings.cat] || CATEGORIES.general;
  const use = document.querySelector('#cat-badge use');
  if (use) use.setAttribute('href', '#' + c.icon);
  document.querySelector('#cat-badge .cat-name').textContent = c.name;
}

/* ---------- web-search toggle (composer) ---------- */
const WEB_STATES = { auto: 'خودکار', always: 'همیشه', off: 'خاموش' };
function updateWebBtn() {
  const b = $('#btn-web');
  const m = settings.webSearch || 'auto';
  b.dataset.mode = m;
  b.title = 'جستجوی وب: ' + WEB_STATES[m] + ' (کلیک برای تغییر)';
  b.classList.toggle('mode-off', m === 'off');
  b.classList.toggle('mode-always', m === 'always');
}
function cycleWebMode() {
  const order = ['auto', 'always', 'off'];
  const next = order[(order.indexOf(settings.webSearch || 'auto') + 1) % order.length];
  settings.webSearch = next;
  saveSettings(settings);
  updateWebBtn();
  toast('جستجوی وب: ' + WEB_STATES[next]);
}

/* ============================================================
   v1.6.0: استودیوی ساخت عکس — سبک‌ها + گالری + API واقعی
   ============================================================ */
const IMG_STYLES = {
  none: { label: 'بدون سبک', suffix: '' },
  realistic: { label: 'واقع‌گرایانه', suffix: ', photorealistic, ultra detailed, sharp focus, cinematic lighting, 8k' },
  anime: { label: 'انیمه', suffix: ', anime style, vibrant colors, clean line art, studio quality' },
  digital: { label: 'دیجیتال آرت', suffix: ', digital painting, concept art, highly detailed, trending on artstation' },
  watercolor: { label: 'آبرنگ', suffix: ', watercolor painting, soft brush strokes, paper texture, artistic' },
  pixel: { label: 'پیکسل‌آرت', suffix: ', pixel art, 16-bit retro game style, crisp pixels' },
  render3d: { label: 'سه‌بعدی', suffix: ', 3D render, octane render, volumetric lighting, high quality CGI' },
  gameart: { label: 'آرت بازی', suffix: ', stylized game art, colorful game asset, concept art for video game' }
};
/* v1.9.0: متادیتای تم‌ها — برای رنگ نوار وضعیت اندروید */
const THEME_META = {
  night:    { name: 'شبِ بنفش',       note: 'پیش‌فرض',   bar: '#12091f' },
  ocean:    { name: 'اقیانوس آبی',    note: 'آرام',      bar: '#060d1a' },
  emerald:  { name: 'جنگل زمردی',     note: 'سبزِ تازه', bar: '#04120c' },
  sunset:   { name: 'غروب نارنجی',    note: 'گرم',       bar: '#150a04' },
  light:    { name: 'روشن (مینیمال)', note: 'روز',       bar: '#f1ecfb' },
  midnight: { name: 'نیمه‌شبِ مشکی',  note: 'AMOLED',    bar: '#05060c' }
};
function applyLook() {
  try {
    const t = THEME_META[settings.theme] ? settings.theme : 'night';
    document.body.dataset.theme = t;
    document.body.style.setProperty('--msgfs', (14.5 * (Number(settings.fontScale) || 1)).toFixed(1) + 'px');
    document.body.classList.toggle('no-anim', settings.anim === false);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_META[t].bar);
  } catch (e) {}
}
/* v1.9.0: شبکهٔ کارت‌های تم — با یک لمس فوراً اعمال و ذخیره می‌شود */
function renderThemeGrid() {
  const grid = $('#theme-grid');
  if (!grid) return;
  const cur = THEME_META[settings.theme] ? settings.theme : 'night';
  grid.innerHTML = Object.keys(THEME_META).map((id) =>
    '<button type="button" class="theme-card' + (id === cur ? ' active' : '') + '" data-theme="' + id + '">' +
      '<span class="swatch sw-' + id + '"></span><b>' + THEME_META[id].name + '</b><i>' + THEME_META[id].note + '</i>' +
    '</button>'
  ).join('');
  grid.querySelectorAll('.theme-card').forEach((b) => {
    b.addEventListener('click', () => {
      settings.theme = b.dataset.theme;
      saveSettings(settings);
      $('#set-theme').value = settings.theme;
      applyLook();
      renderThemeGrid();
      toast('تم «' + THEME_META[settings.theme].name + '» فعال شد — فوراً ذخیره شد');
    });
  });
}

/* ============================================================
   v1.9.0: انتخاب‌گر زیبای مدل — شیت لمسی با کارت‌های مدل
   (جایگزین منوی زشت و بومی select در اندروید)
   ============================================================ */
const MODEL_INFO = {
  'zai-org/GLM-5.3-Flash': { desc: 'مغز اصلی سوکوت — استدلال قوی، پاسخ سریع و فارسی روان؛ بهترین انتخاب برای بیشتر کارها.', tags: ['استدلال', 'سریع', '۱M توکن'] },
  'MiniMaxAI/MiniMax-M2.7': { desc: 'مغز قدرتمند برای کارهای سنگین و استدلال طولانی؛ وقتی جواب کاملی می‌خواهی امتحانش کن.', tags: ['استدلال', 'قوی'] },
  'deepseek-ai/DeepSeek-V4-Flash-0731': { desc: 'استدلال عمیق و دقیق — عالی برای ریاضی، کدنویسی و مسئله‌های پیچیده.', tags: ['استدلال', 'دقیق'] },
  'openai-fast': { desc: 'مغز رایگان همیشگی — بدون کلید و بدون ثبت‌نام.', tags: ['رایگان', 'سریع'] }
};
/* v1.14.0: جزئیات کامل ۲۹ مدل فعال فری‌مدل در انتخاب‌گر — سازنده + قابلیت‌ها + پنجره + قیمت */
Object.keys(FM_META).forEach((id) => {
  const m = FM_META[id];
  const long = (FM_MODELS[id] || '').split('—').slice(1).join('—').trim();
  MODEL_INFO[id] = {
    desc: long || ('مدل فعال فری‌مدل از ' + m.by),
    tags: m.caps.concat(['سازنده: ' + m.by, 'پنجره: ' + m.ctx, 'قیمت: ' + m.price + '/۱M'])
  };
});
/* v1.16.0: جزئیات کامل ۱۸ مدل فعال کوآرنا — کلیدِ coa: تا با مدل‌های هم‌نامِ فری‌مدل قاطی نشود */
Object.keys(COA_META).forEach((id) => {
  const m = COA_META[id];
  const long = (COA_MODELS[id] || '').split('—').slice(1).join('—').trim();
  MODEL_INFO['coa:' + id] = {
    desc: long || ('مدل فعال کوآرنا از ' + m.by),
    tags: m.caps.concat(['سازنده: ' + m.by, 'پنجره: ۱۲۸K', 'خروجی: ۱۶K', 'رایگان'])
  };
});
const PICK_CUSTOM_OK = ['cloudflare', 'groq', 'gemini', 'zai', 'custom'];

/* v1.10.0: گروه‌بندی مدل‌های کلادفلر برای انتخاب‌گر — هر مدل دقیقاً یک‌بار، بدون تکرار */
const CF_PICK_GROUPS = [
  { title: '👑 غول‌های بالای ۳۰۰B — پلن ارتقایافتهٔ کلادفلر', ids: ['@cf/zai-org/glm-5.3', '@cf/zai-org/glm-5.2', '@cf/moonshotai/kimi-k2.6', '@cf/moonshotai/kimi-k2.7-code', '@cf/deepseek-ai/deepseek-v4-pro-0813', '@cf/zai-org/glm-5.3-flash', '@cf/deepseek-ai/deepseek-v4.1-flash-1017'] },
  { title: '🧠 مغزهای بزرگ عمومی — رایگان', ids: ['@cf/meta/llama-3.3-70b-instruct-fp8-fast', '@cf/openai/gpt-oss-120b', '@cf/nvidia/nemotron-3-120b-a12b', '@cf/openai/gpt-oss-20b'] },
  { title: '💻 برنامه‌نویسی و کد', ids: ['@cf/qwen/qwen2.5-coder-32b-instruct', '@cf/qwen/qwen3-30b-a3b-fp8', '@cf/ibm-granite/granite-4.0-h-micro'] },
  { title: '🔍 استدلال عمیق (کندتر، با تفکر)', ids: ['@cf/deepseek-ai/deepseek-r1-distill-qwen-32b', '@cf/qwen/qwq-32b'] },
  { title: '👁 بینایی — این‌ها عکس را می‌بینند', ids: ['@cf/meta/llama-4-scout-17b-16e-instruct', '@cf/qwen/qwen3.8-27b'] },
  { title: '⚡ سبک و سریع', ids: ['@cf/mistralai/mistral-small-3.1-24b-instruct', '@cf/aisingapore/gemma-sea-lion-v4-27b-it', '@cf/zai-org/glm-4.7-flash', '@cf/google/gemma-4-26b-a4b-it', '@cf/utter-project/eurollm-9b-it', '@cf/meta/llama-3.1-8b-instruct-fast', '@cf/meta/llama-3.1-8b-instruct-fp8', '@cf/meta/llama-3.2-3b-instruct', '@cf/mistral/mistral-7b-instruct-v0.1'] }
];

function openModelPicker(fromSettings) {
  renderModelCards();
  $('#model-backdrop').classList.remove('hidden');
}
function closeModelPicker() { $('#model-backdrop').classList.add('hidden'); }

function renderModelCards() {
  const p = PROVIDERS[settings.provider] || PROVIDERS.dahl;
  const models = p.models || {};
  const curModel = chosenModel();
  const list = $('#model-list');
  const desc = $('#model-sheet-desc');
  const nAll = Object.keys(models).length;
  const faNum2 = (n) => String(n).replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d]);
  if (desc) desc.textContent = 'مدل‌های سرویس «' + p.name + '» (' + faNum2(nAll) + ' مدل) — با یک لمس عوض کن؛ فوراً اعمال و ذخیره می‌شود و چیپِ «با مغز …» زیر هر پاسخ مدلِ واقعی را نشان می‌دهد.';
  const card = (id) => {
    /* v1.16.0: متادیتای مخصوص همان سرویس (کوآرنا = coa: تا با فری‌مدل قاطی نشود) */
    const info = MODEL_INFO[(settings.provider === 'coarena' ? 'coa:' : '') + id] || MODEL_INFO[id] || {};
    const nm = String(models[id] || id).split('—')[0].trim();
    const tags = (info.tags || []).map((t) => '<i>' + esc(t) + '</i>').join('');
    const recId = settings.provider === 'freemodel' ? 'deepseek-v4.1-flash' : settings.provider === 'coarena' ? COA_DEFAULT_MODEL : 'zai-org/GLM-5.3-Flash';
    const rec = id === recId ? '<i class="mc-tag">پیشنهادی</i>' : '';
    return '<button type="button" class="model-card' + (id === curModel ? ' active' : '') + '" data-model="' + esc(id) + '">' +
      '<span class="mc-radio"></span>' +
      '<span class="mc-body"><b>' + esc(nm) + rec + '</b>' +
      '<span class="mc-desc">' + esc(info.desc || models[id] || id) + '</span>' +
      (tags ? '<span class="mc-tags">' + tags + '</span>' : '') +
      '</span></button>';
  };
  /* v1.10.0: کلادفلر با تیترِ گروه‌بندی — v1.14.0: فری‌مدل — v1.16.0: کوآرنا */
  const grouped = settings.provider === 'cloudflare' || settings.provider === 'freemodel' || settings.provider === 'coarena';
  if (grouped) {
    const groups = settings.provider === 'coarena' ? COA_GROUPS : (settings.provider === 'freemodel' ? FM_GROUPS : CF_PICK_GROUPS);
    let html = '';
    for (const g of groups) {
      const ids = g.ids.filter((id) => models[id]);
      if (!ids.length) continue;
      html += '<div class="mg-title">' + esc(g.title) + '</div>';
      html += ids.map(card).join('');
    }
    /* هر مدلی که در گروه‌ها نیامده (اگر آینده اضافه شد) هم دیده شود */
    const rest = Object.keys(models).filter((id) => groups.every((g) => g.ids.indexOf(id) === -1));
    if (rest.length) html += '<div class="mg-title">سایر مدل‌ها</div>' + rest.map(card).join('');
    list.innerHTML = html;
  } else {
    list.innerHTML = Object.keys(models).map(card).join('');
  }
  list.querySelectorAll('.model-card').forEach((b) => {
    b.addEventListener('click', () => applyPickedModel(b.dataset.model, false));
  });
  const box = $('#box-model-custom');
  if (box) box.classList.toggle('hidden', PICK_CUSTOM_OK.indexOf(settings.provider) === -1);
}

function applyPickedModel(id, isCustom) {
  settings.model = id;
  if (isCustom) settings.modelCustom = id;
  /* v1.14.0: انتخاب مدل سراسری قفل شد — اگر مدلِ پیک‌شده متعلق به سرویس دیگری بود،
     سرویس هم خودکار همان می‌شود تا «تغییر مدل در گفتگو» هیچ‌وقت بی‌اثر نباشد */
  if (!isCustom) {
    /* v1.16.0: اگر همان سرویسِ فعلی هم این مدل را دارد، سرویس عوض نشود
       (مدل‌های هم‌نام مثل kimi-k3 و claude-sonnet-5-5 بین فری‌مدل و کوآرنا) */
    let owner = null;
    const cur = PROVIDERS[settings.provider];
    if (cur && cur.models && cur.models[id]) owner = settings.provider;
    else {
      for (const pid of Object.keys(PROVIDERS)) {
        if (PROVIDERS[pid].models && PROVIDERS[pid].models[id]) { owner = pid; break; }
      }
    }
    if (owner && owner !== 'custom' && settings.provider !== owner) {
      settings.provider = owner;
      const sp = $('#set-provider');
      if (sp) sp.value = owner;
    }
  }
  settings.modelPicked = true;
  saveSettings(settings);
  /* همگام‌سازی با select مخفی تنظیمات تا ذخیرهٔ بعدی هم درست بماند */
  const sel = $('#set-model');
  if (sel) {
    const ids = Array.from(sel.options).map((o) => o.value);
    if (!isCustom && ids.indexOf(id) === -1 && sel.querySelector('option[value="custom"]')) {
      const opt = document.createElement('option');
      opt.value = id; opt.textContent = prettyModel(id);
      sel.insertBefore(opt, sel.querySelector('option[value="custom"]'));
    }
    if (isCustom && sel.querySelector('option[value="custom"]')) sel.value = 'custom';
    else if (ids.indexOf(id) !== -1 || sel.querySelector('option[value="' + id + '"]')) sel.value = id;
    const ci = $('#set-model-custom');
    if (ci) {
      ci.value = isCustom ? id : (settings.modelCustom || '');
      ci.classList.toggle('hidden', sel.value !== 'custom');
    }
  }
  updateModelTrigger();
  refreshStatus();
  closeModelPicker();
  toast('مدل «' + prettyModel(settings.model) + '» فعال شد ✓');
}

function updateModelTrigger() {
  const lbl = $('#set-model-label');
  if (!lbl) return;
  const sel = $('#set-model');
  const ci = $('#set-model-custom');
  let v = (sel && sel.value) ? sel.value : (settings.model || '');
  if (v === 'custom') v = (ci && ci.value.trim()) || settings.modelCustom || 'custom';
  lbl.textContent = prettyModel(v);
}

/* ============================================================
   v1.15.0: پنل «پارامترهای هوش مصنویی» — مثل پنل Parameters فری‌مدل
   خلاقیت (Temperature) · سهم فکر و توکن خروجی (Max output tokens) ·
   تنوع خروجی (Top P) · دستور اختصاصی مدل (System prompt)
   هر مدل می‌تواند پارامترِ مخصوص خودش را داشته باشد («هر مغز، تنظیمِ خودش»)
   یا مقادیر سراسری برای همهٔ مدل‌ها اعمال شود — روی موبایل و کامپیوتر
   ============================================================ */
const PARAM_DEFAULTS = { temp: 0.7, topP: 1, maxTok: 0, sys: '' };
let paramsScope = 'all';
function modelParams(mid) {
  const id = mid || chosenModel();
  const per = (settings.mParams || {})[id];
  return {
    model: id,
    temp: per && per.temp != null ? clampN(numOr(per.temp, PARAM_DEFAULTS.temp), 0, 2)
      : clampN(numOr(settings.temp, PARAM_DEFAULTS.temp), 0, 2),
    topP: per && per.topP != null ? clampN(numOr(per.topP, PARAM_DEFAULTS.topP), 0.05, 1)
      : clampN(numOr(settings.topP, PARAM_DEFAULTS.topP), 0.05, 1),
    maxTok: per && per.maxTok != null ? clampN(Math.round(numOr(per.maxTok, 0)), 0, 32768)
      : clampN(Math.round(numOr(settings.maxTok, 0)), 0, 32768),
    sys: per && typeof per.sys === 'string' && per.sys.trim() ? per.sys.trim()
      : String(settings.sys || '').trim()
  };
}
function faTok(n) {
  if (!n || n <= 0) return 'خودکار';
  return faNum(Number(n).toLocaleString('en-US'));
}
function paramsDesc() {
  const mid = chosenModel();
  const hasOwn = !!(settings.mParams || {})[mid];
  return 'مدل فعال: <b>' + esc(prettyModel(mid)) + '</b> · سرویس: <b>' + esc((PROVIDERS[settings.provider] || {}).name || '') + '</b>' +
    (hasOwn ? ' — این مدل <b>پارامتر اختصاصی خودش</b> را دارد ✓' : ' — این مدل الان از مقادیر سراسری پیروی می‌کند');
}
function syncParamsScope() {
  document.querySelectorAll('#params-scope .seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.scope === paramsScope));
}
function openParamsModal() {
  const mid = chosenModel();
  const per = (settings.mParams || {})[mid] || null;
  paramsScope = per ? 'model' : 'all';
  const mp = modelParams(mid);
  $('#pt-temp').value = mp.temp;
  $('#pt-temp-val').textContent = mp.temp;
  $('#pt-topp').value = mp.topP;
  $('#pt-topp-val').textContent = mp.topP;
  const auto = !(mp.maxTok > 0);
  $('#pt-auto').checked = auto;
  $('#pt-max').value = auto ? 16384 : mp.maxTok;
  $('#pt-max-val').textContent = faTok(mp.maxTok);
  $('#pt-max').classList.toggle('off', auto);
  document.querySelectorAll('#pt-max-chips button').forEach((x) => x.classList.toggle('active', auto ? false : Number(x.dataset.max) === mp.maxTok));
  $('#pt-sys').value = per && typeof per.sys === 'string' ? per.sys : String(settings.sys || '');
  $('#params-desc').innerHTML = paramsDesc();
  syncParamsScope();
  $('#params-backdrop').classList.remove('hidden');
}
function closeParamsModal() { $('#params-backdrop').classList.add('hidden'); }
function saveParamsModal() {
  const v = {
    temp: clampN(numOr($('#pt-temp').value, 0.7), 0, 2),
    topP: clampN(numOr($('#pt-topp').value, 1), 0.05, 1),
    maxTok: $('#pt-auto').checked ? 0 : clampN(Math.round(numOr($('#pt-max').value, 16384)), 256, 32768),
    sys: $('#pt-sys').value.trim()
  };
  const mid = chosenModel();
  if (paramsScope === 'model') {
    if (!settings.mParams || typeof settings.mParams !== 'object') settings.mParams = {};
    settings.mParams[mid] = v;
    toast('پارامترهای «' + prettyModel(mid) + '» ذخیره شد ✓');
  } else {
    settings.temp = v.temp;
    settings.topP = v.topP;
    settings.maxTok = v.maxTok;
    settings.sys = v.sys;
    toast('پارامترها برای همهٔ مدل‌ها ذخیره شد ✓');
  }
  saveSettings(settings);
  updateParamsBtn();
  closeParamsModal();
}
function resetParamsModal() {
  $('#pt-temp').value = PARAM_DEFAULTS.temp; $('#pt-temp-val').textContent = PARAM_DEFAULTS.temp;
  $('#pt-topp').value = PARAM_DEFAULTS.topP; $('#pt-topp-val').textContent = PARAM_DEFAULTS.topP;
  $('#pt-auto').checked = true;
  $('#pt-max').classList.add('off');
  $('#pt-max').value = 16384; $('#pt-max-val').textContent = 'خودکار';
  document.querySelectorAll('#pt-max-chips button').forEach((x) => x.classList.remove('active'));
  $('#pt-sys').value = '';
  toast('به پیش‌فرض سوکوت برگشت — حالا «تأیید» را بزن');
}
/* چیپ نارنجی روی دکمهٔ پارامترها: مدلِ فعلی پارامتر اختصاصی دارد یا مقادیر از پیش‌فرض خارج شده */
function updateParamsBtn() {
  const b = $('#btn-params');
  if (!b) return;
  const per = (settings.mParams || {})[chosenModel()];
  const nonDefault = clampN(numOr(settings.temp, PARAM_DEFAULTS.temp), 0, 2) !== PARAM_DEFAULTS.temp ||
    clampN(numOr(settings.topP, PARAM_DEFAULTS.topP), 0.05, 1) !== PARAM_DEFAULTS.topP ||
    Math.round(numOr(settings.maxTok, 0)) !== 0 || !!(settings.sys || '').trim();
  b.classList.toggle('has-params', !!per || nonDefault);
  b.title = per ? 'پارامترهای هوش مصنویی — «' + prettyModel(chosenModel()) + '» پارامتر اختصاصی دارد'
    : 'پارامترهای هوش مصنویی — خلاقیت، سهم فکر/توکن، Top P و دستور اختصاصی هر مدل';
}

/* ============================================================
   v1.5.0: ساخت عکس (مثل ChatGPT) + ارسال one-shot برای همهٔ محیط‌ها
   ============================================================ */
function oneShotPost(url, headers, bodyStr, timeoutMs) {
  /* ارسال POST یک‌باره (بدون SSE) روی پل اندروید/ویندوز — پاسخ کامل برمی‌گردد */
  return new Promise((resolve, reject) => {
    const cbId = uid();
    let buf = '';
    let settled = false;
    const finish = (err) => {
      if (settled) return;
      settled = true;
      clearTimeout(tm);
      pendingStreams.delete(cbId);
      if (err) {
        const m = String(err).match(/^\s*(\d{3})\|\|([\s\S]*)$/);
        reject({ status: m ? +m[1] : 0, body: m ? m[2] : String(err) });
      } else resolve(buf);
    };
    const tm = setTimeout(() => finish('000||پاسخ سرور خیلی طول کشید'), timeoutMs || 90000);
    pendingStreams.set(cbId, { onDelta: (t) => { buf += t; }, onDone: finish });
    try {
      if (ENV === 'android') {
        if (typeof AndroidAI === 'undefined' || !AndroidAI.request) { finish('000||پل اندروید در دسترس نیست'); return; }
        AndroidAI.request(cbId, url, JSON.stringify(headers), bodyStr);
      } else if (ENV === 'electron') {
        if (!window.electronAPI) { finish('000||پل ویندوز در دسترس نیست'); return; }
        let obj = bodyStr;
        try { obj = JSON.parse(bodyStr); } catch (e) {}
        window.electronAPI.request({ id: cbId, url, headers, body: obj });
      } else { pendingStreams.delete(cbId); finish('000||web uses fetch'); }
    } catch (e) { finish('000||' + (e && e.message ? e.message : e)); }
  });
}

function b64ToDataURL(b64) {
  const s = String(b64).trim();
  if (s.indexOf('data:') === 0) return s;
  const mime = s.slice(0, 8) === 'iVBORw0K' ? 'image/png' : 'image/jpeg';
  return 'data:' + mime + ';base64,' + s;
}

const FLUX_MODEL = '@cf/black-forest-labs/flux-1-schnell';
function cfReady() {
  return settings.provider === 'cloudflare' && !!(settings.token || '').trim() &&
    (!!((settings.account || '').trim()) || !!((settings.base || '').trim()));
}
function imageRunUrl() {
  const base = (settings.base || '').trim();
  if (base) {
    const root = base.replace(/\/+$/, '').replace(/\/chat\/completions$/i, '');
    return root + '/run/' + FLUX_MODEL;
  }
  return 'https://api.cloudflare.com/client/v4/accounts/' + encodeURIComponent((settings.account || '').trim()) + '/ai/run/' + FLUX_MODEL;
}
function extractFluxB64(txt) {
  let j = null;
  try { j = JSON.parse(txt); } catch (e) {}
  const r = (j && (j.result || j)) || {};
  const img = r.image || r.img || (Array.isArray(r.images) && r.images[0]);
  if (!img) throw { status: 200, body: txt.slice(0, 200) };
  return img;
}
async function cfImage(prompt) {
  const bodyStr = JSON.stringify({ prompt: String(prompt).slice(0, 900) });
  let out;
  if (ENV === 'web') {
    const ctrl = new AbortController();
    const t = setTimeout(() => { try { ctrl.abort(); } catch (e) {} }, 95000);
    try {
      const r = await fetch(imageRunUrl(), { method: 'POST', headers: apiHeaders(), body: bodyStr, signal: ctrl.signal });
      if (!r.ok) throw { status: r.status, body: await r.text().catch(() => '') };
      out = await r.text();
    } finally { clearTimeout(t); }
  } else {
    out = await oneShotPost(imageRunUrl(), apiHeaders(), bodyStr, 95000);
  }
  return b64ToDataURL(extractFluxB64(out));
}
function pollinationsURL(prompt, seed) {
  return 'https://image.pollinations.ai/prompt/' + encodeURIComponent(String(prompt).slice(0, 700)) +
    '?width=1024&height=1024&nologo=true&model=flux&seed=' + (seed || 7);
}
function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const im = new Image();
    const t = setTimeout(() => { try { im.src = ''; } catch (e) {} reject(new Error('زمان ساخت عکس تمام شد — دوباره تلاش کن')); }, 110000);
    im.onload = () => { clearTimeout(t); resolve(true); };
    im.onerror = () => { clearTimeout(t); reject(new Error('موتور عکس جواب نداد — دوباره تلاش کن')); };
    im.src = url;
  });
}
function pickImageEngine() {
  const e = settings.imageEngine || 'auto';
  if (e === 'cloudflare') return 'cloudflare';
  if (e === 'pollinations') return 'pollinations';
  return cfReady() ? 'cloudflare' : 'pollinations';
}
/* پرامپت فارسی را برای نتیجهٔ بهتر به انگلیسی روان ترجمه کن (کوتاه، با مهلت) */
async function translatePrompt(text) {
  const isFa = /[\u0600-\u06FF]/.test(text);
  if (!isFa || !apiUrl()) return '';
  const p0 = PROVIDERS[settings.provider] || PROVIDERS.cloudflare;
  if (p0.needsToken !== false && !(settings.token || '').trim()) return '';
  try {
    const body = {
      model: chosenModel(), stream: false, max_tokens: 140, temperature: 0.1,
      messages: [
        { role: 'system', content: 'You are a translator. Translate the user text into one vivid English prompt for an image-generation model. Reply ONLY with the English prompt.' },
        { role: 'user', content: String(text).slice(0, 300) }
      ]
    };
    const raw = ENV === 'web'
      ? await (async () => {
          const ctrl = new AbortController();
          const t = setTimeout(() => { try { ctrl.abort(); } catch (e) {} }, 15000);
          try {
            const r = await fetch(apiUrl(), { method: 'POST', headers: apiHeaders(), body: JSON.stringify(body), signal: ctrl.signal });
            if (!r.ok) throw new Error('http ' + r.status);
            return await r.text();
          } finally { clearTimeout(t); }
        })()
      : await oneShotPost(apiUrl(), apiHeaders(), JSON.stringify(body), 15000);
    const j = JSON.parse(raw);
    const out = j && j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
    const clean = String(out || '').replace(/^["'\s]+|["'\s]+$/g, '').replace(/[\r\n]+/g, ' ');
    return (clean && clean.length > 2 && !/error|unavailable/i.test(clean)) ? clean.slice(0, 400) : '';
  } catch (e) { return ''; }
}
const IMG_ENGINE_NAME = { cloudflare: 'Flux · Cloudflare', pollinations: 'Flux · پولینیشن (رایگان)' };
function genImgHTML(m) {
  return '<div class="gen-img-wrap"><img class="gen-img" src="' + esc(m.img) + '" alt="عکس ساخته‌شده"></div>' +
    (m.c ? '<p class="gen-caption">' + esc(m.c) + '</p>' : '') +
    '<div class="img-actions">' +
    '<button type="button" class="img-save"><svg class="ic"><use href="#i-download"/></svg><span>ذخیرهٔ عکس</span></button>' +
    '<button type="button" class="img-open"><svg class="ic"><use href="#i-expand"/></svg><span>بزرگ / باز کردن</span></button>' +
    '</div>';
}
function openImageSrc(src) {
  try {
    if (ENV === 'android' && typeof AndroidAI !== 'undefined' && AndroidAI.openUrl) { AndroidAI.openUrl(src); return; }
    if (ENV === 'electron' && window.electronAPI && window.electronAPI.openExternal) { window.electronAPI.openExternal(src); return; }
  } catch (e) {}
  window.open(src, '_blank', 'noopener');
}
function saveGeneratedImage(src) {
  const name = 'sukot-image-' + Date.now() + (String(src).indexOf('data:image/png') === 0 ? '.png' : '.jpg');
  if (String(src).indexOf('data:') === 0) {
    if (ENV === 'android' && typeof AndroidAI !== 'undefined' && AndroidAI.saveImage) {
      const p = AndroidAI.saveImage(name, src);
      toast(p ? 'عکس ذخیره شد: ' + p : 'ذخیرهٔ عکس ممکن نشد', !p);
      return;
    }
    if (ENV === 'electron' && window.electronAPI && window.electronAPI.saveImage) {
      window.electronAPI.saveImage(name, src).then((p) => toast(p ? 'عکس در Downloads ذخیره شد ✓' : 'ذخیره ممکن نشد', !p)).catch(() => toast('ذخیره ممکن نشد', true));
      return;
    }
    try {
      const a = document.createElement('a');
      a.href = src; a.download = name;
      document.body.appendChild(a); a.click(); a.remove();
      toast('عکس ذخیره شد ✓');
    } catch (e) { toast('ذخیره ممکن نشد', true); }
  } else {
    openImageSrc(src);
    toast('عکس در تب جدید باز شد؛ از آنجا می‌توانی ذخیره‌اش کنی');
  }
}
/* عکس ذخیره‌شده در تاریخچه را کوچک کن تا حافظه پر نشود */
function storeThumbAsync(src, msgRef) {
  const im = new Image();
  im.onload = () => {
    try {
      const t = canvasResize(im, 640, 0.8);
      if (t && t.length < String(src).length) { msgRef.img = t; saveChats(chats); }
    } catch (e) {}
  };
  im.src = src;
}
async function sendImage(text) {
  let c = currentChat();
  if (!c) { newChat(); c = currentChat(); }
  $('#welcome').classList.add('hidden');
  if (c.msgs.length === 0) { c.title = ('عکس: ' + text).slice(0, 32); renderChatList(); }
  c.msgs.push({ r: 'user', c: text, gen: true });
  addMsgDom('user', userMsgHTML(text, [], [], true));
  $('#input').value = ''; autoGrow();
  saveChats(chats); scrollBottom(true);

  sendLock = true; setBusy(true);
  const botId = 'bot-' + uid();
  const w = addMsgDom('bot',
    '<div class="img-loading"><svg class="ic brush"><use href="#i-image"/></svg>' +
    '<span>دارم عکس «' + esc(text.slice(0, 60)) + '» را می‌سازم…<br>حدود ۱۰ تا ۳۰ ثانیه صبر کن</span></div>', botId);
  scrollBottom(true);

  const engine = pickImageEngine();
  let res = null, via = '', errFinal = null;
  const attempt = async (eng) => {
    if (eng === 'cloudflare') {
      const promptEn = await translatePrompt(text);
      const src = await cfImage(promptEn || text);
      via = 'cloudflare';
      return { src: src, promptEn: promptEn };
    }
    const url = pollinationsURL(text, Math.floor(Math.random() * 99999));
    await preloadImage(url);
    via = 'pollinations';
    return { src: url, promptEn: '' };
  };
  try { res = await attempt(engine); }
  catch (e1) {
    const other = engine === 'cloudflare' ? 'pollinations' : (cfReady() ? 'cloudflare' : null);
    if (!other) {
      errFinal = (e1 && e1.body && e1.status ? friendlyError(e1.status, e1.body) : (e1 && e1.message) || 'ساخت عکس ممکن نشد');
    } else {
      w.querySelector('.bubble').innerHTML = toolNoteHTML('موتور اول جواب نداد؛ با موتور رایگان جایگزین دوباره تلاش می‌کنم…');
      scrollBottom(false);
      try { res = await attempt(other); }
      catch (e2) { errFinal = (e2 && e2.body && e2.status ? friendlyError(e2.status, e2.body) : (e2 && e2.message) || 'ساخت عکس ممکن نشد'); }
    }
  }

  setBusy(false); sendLock = false;
  const bubble = w.querySelector('.bubble');
  if (errFinal || !res) {
    bubble.innerHTML = errorHTML('ساخت عکس ناموفق بود: ' + errFinal);
    c.msgs.push({ r: 'assistant', c: '[خطا] ساخت عکس ناموفق بود: ' + errFinal });
    saveChats(chats); scrollBottom(false); return;
  }
  const caption = 'عکس ساخته شد با ' + (IMG_ENGINE_NAME[via] || via) +
    (res.promptEn && res.promptEn !== text ? ' — پرامپت انگلیسی‌شده: «' + res.promptEn + '»' : '');
  bubble.innerHTML = genImgHTML({ img: res.src, c: caption });
  w.querySelector('.img-save').addEventListener('click', () => saveGeneratedImage(res.src));
  w.querySelector('.img-open').addEventListener('click', () => openImageSrc(res.src));
  const msgRef = { r: 'assistant', c: caption, img: res.src, via: via };
  c.msgs.push(msgRef);
  saveChats(chats); scrollBottom(false);
  if (String(res.src).indexOf('data:') === 0) storeThumbAsync(res.src, msgRef);
}

function updateImageBtn() {
  const b = $('#btn-image');
  if (!b) return;
  const on = !!settings.imageMode;
  b.dataset.mode = on ? 'on' : 'off';
  b.title = on ? 'ساخت عکس: روشن — پیام بعدی عکس می‌سازد (کلیک برای خاموش‌کردن)'
               : 'ساخت عکس: خاموش (کلیک برای روشن‌کردن — مثل ChatGPT عکس می‌سازد)';
  b.classList.toggle('mode-img', on);
}

/* ---------- استودیوی ساخت عکس (v1.6.0) ---------- */
let studioStyle = 'none';
let studioBusy = false;
function openStudio() {
  renderStudioRecent();
  $('#studio-backdrop').classList.remove('hidden');
  setTimeout(() => { try { $('#studio-prompt').focus(); } catch (e) {} }, 60);
}
function closeStudio() { $('#studio-backdrop').classList.add('hidden'); }
function collectRecentImages() {
  const out = [];
  for (const c of chats) {
    for (let i = c.msgs.length - 1; i >= 0; i--) {
      const m = c.msgs[i];
      if (m.r === 'assistant' && m.img) out.push(m);
      if (out.length >= 12) return out;
    }
  }
  return out;
}
function renderStudioRecent() {
  const box = $('#studio-recent');
  const items = collectRecentImages();
  if (!items.length) {
    box.innerHTML = '<div class="mem-empty" style="padding:10px 0">هنوز عکی نساخته‌ای — اولین عکست را بساز!</div>';
    return;
  }
  box.innerHTML = items.map((m, i) =>
    '<button type="button" class="recent-thumb" data-i="' + i + '"><img src="' + esc(m.img) + '" alt="عکس ساخته‌شده" loading="lazy"></button>'
  ).join('');
  box.querySelectorAll('.recent-thumb').forEach((b) => {
    b.addEventListener('click', () => {
      const m = items[+b.dataset.i];
      showStudioResult(m.img, m.c || 'عکس ساخته‌شده', false);
    });
  });
}
function showStudioResult(src, caption, withAttach) {
  const box = $('#studio-result');
  box.classList.remove('hidden');
  const canAttach = String(src).indexOf('data:') === 0 && withAttach;
  box.innerHTML =
    '<div class="gen-img-wrap"><img class="gen-img" src="' + esc(src) + '" alt="تصویر ساخته‌شده"></div>' +
    '<p class="gen-caption">' + esc(caption || '') + '</p>' +
    '<div class="img-actions">' +
    '<button type="button" class="st-save"><svg class="ic"><use href="#i-download"/></svg><span>ذخیرهٔ تصویر</span></button>' +
    '<button type="button" class="st-open"><svg class="ic"><use href="#i-expand"/></svg><span>بزرگ‌نمایی</span></button>' +
    (canAttach ? '<button type="button" class="st-attach"><svg class="ic"><use href="#i-paperclip"/></svg><span>پیوست به گفتگو</span></button>' : '') +
    '<button type="button" class="st-again"><svg class="ic"><use href="#i-bolt"/></svg><span>ساخت دوباره</span></button>' +
    '</div>';
  box.querySelector('.st-save').addEventListener('click', () => saveGeneratedImage(src));
  box.querySelector('.st-open').addEventListener('click', () => openImageSrc(src));
  const ab = box.querySelector('.st-attach');
  if (ab) ab.addEventListener('click', () => attachStudioImage(src));
  box.querySelector('.st-again').addEventListener('click', () => studioGenerate(true));
}
function attachStudioImage(dataUrl) {
  const im = new Image();
  im.onload = () => {
    pendingAttach.push({
      kind: 'image', name: 'studio-' + Date.now() + '.jpg',
      api: canvasResize(im, IMG_API_MAX, 0.85), thumb: canvasResize(im, IMG_THUMB_MAX, 0.72)
    });
    renderAttachBar();
    closeStudio();
    toast('تصویر پیوست شد — حالا درباره‌اش بپرس');
  };
  im.onerror = () => toast('پیوست این تصویر ممکن نشد', true);
  im.src = dataUrl;
}
async function studioGenerate(again) {
  if (studioBusy) return;
  const promptEl = $('#studio-prompt');
  const text = (again ? (studioGenerate._last || '') : promptEl.value.trim()) || promptEl.value.trim();
  if (!text) { toast('اول بنویس چه تصویری بسازم', true); return; }
  if (!again) studioGenerate._last = text;
  studioBusy = true;
  const goBtn = $('#btn-studio-go');
  goBtn.classList.add('busy');
  goBtn.innerHTML = '<svg class="ic brush"><use href="#i-brush"/></svg><span>در حال ساخت…</span>';
  const st = $('#studio-status');
  st.className = 'test-result';
  st.textContent = 'دارم تصویر را با هوش مصنوعی واقعی می‌سازم… (۱۰ تا ۴۰ ثانیه)';
  $('#studio-result').classList.add('hidden');

  const style = IMG_STYLES[studioStyle] || IMG_STYLES.none;
  const full = text + (style.suffix || '');
  const engine = pickImageEngine();
  let src = null, via = '', err = null;
  const attempt = async (eng) => {
    if (eng === 'cloudflare') {
      const promptEn = await translatePrompt(text);
      src = await cfImage((promptEn || text) + (style.suffix || ''));
      via = 'cloudflare';
      return;
    }
    /* نشانی یکتا با seed تصادفی — همان نشانیِ preload نمایش داده می‌شود (کش فوری) */
    const pUrl = pollinationsURL(full, Math.floor(Math.random() * 99999));
    await preloadImage(pUrl);
    src = pUrl;
    via = 'pollinations';
  };
  try { await attempt(engine); }
  catch (e1) {
    const other = engine === 'cloudflare' ? 'pollinations' : (cfReady() ? 'cloudflare' : null);
    if (!other) {
      err = (e1 && e1.body && e1.status ? friendlyError(e1.status, e1.body) : (e1 && e1.message) || 'ساخت تصویر ممکن نشد');
    } else {
      st.textContent = 'موتور اول در دسترس نبود؛ با موتور رایگان جایگزین تلاش می‌کنم…';
      try { await attempt(other); }
      catch (e2) { err = (e2 && e2.body && e2.status ? friendlyError(e2.status, e2.body) : (e2 && e2.message) || 'ساخت تصویر ممکن نشد'); }
    }
  }

  studioBusy = false;
  goBtn.classList.remove('busy');
  goBtn.innerHTML = '<svg class="ic"><use href="#i-brush"/></svg><span>بساز!</span>';
  if (err || !src) {
    st.className = 'test-result err';
    st.textContent = '⚠️ ساخت تصویر ناموفق بود — ' + err + ' (اتصال اینترنت را بررسی کن یا در «مدیریت API» کلادفلر را تنظیم کن)';
    return;
  }
  st.className = 'test-result ok';
  st.textContent = '✓ تصویر با ' + (IMG_ENGINE_NAME[via] || via) + ' ساخته شد.';
  showStudioResult(src, 'سبک: ' + (style.label || 'بدون سبک') + ' · موتور: ' + (IMG_ENGINE_NAME[via] || via), true);
  /* ثبت در تاریخچهٔ گفتگو تا در گالری و گفتگوها بماند */
  let c = currentChat();
  if (!c) { newChat(); c = currentChat(); }
  const msgRef = { r: 'assistant', c: 'تصویر استودیو — «' + text.slice(0, 80) + '» · سبک: ' + (style.label || 'بدون سبک'), img: src, via: via };
  c.msgs.push(msgRef);
  saveChats(chats);
  if (String(src).indexOf('data:') === 0) storeThumbAsync(src, msgRef);
  renderStudioRecent();
}

/* ---------- settings modal ---------- */
let modalProvider = 'cloudflare';

function switchTab(id) {
  document.querySelectorAll('#set-tabs .tab-btn').forEach((b) => b.classList.toggle('active', b.dataset.tab === id));
  document.querySelectorAll('#settings-modal .tab-page').forEach((pg) => pg.classList.toggle('hidden', pg.dataset.page !== id));
}
function applyProviderUI() {
  const p = PROVIDERS[modalProvider] || PROVIDERS.dahl;
  const isCF = modalProvider === 'cloudflare';
  const isDahl = modalProvider === 'dahl';
  const isFM = modalProvider === 'freemodel';
  const isCoa = modalProvider === 'coarena';
  const acc = $('#field-account');
  if (acc) acc.classList.toggle('hidden', !isCF);
  const tr = $('#token-req');
  if (tr) tr.classList.toggle('hidden', p.needsToken === false || isDahl || isFM || isCoa);
  const box = $('#box-keys');
  if (box) box.classList.toggle('hidden', p.needsToken === false || isDahl || isFM || isCoa);
  const dbox = $('#box-dahl-api');
  if (dbox) dbox.classList.toggle('hidden', !isDahl);
  const fbox = $('#box-fm-api');
  if (fbox) fbox.classList.toggle('hidden', !isFM);
  const cbox = $('#box-coa-api');
  if (cbox) cbox.classList.toggle('hidden', !isCoa);
  const kt = $('#keys-title');
  if (kt) kt.textContent = (p.needsToken === false && !isDahl && !isFM && !isCoa) ? 'این سرویس کلید نمی‌خواهد — فقط مدل را انتخاب کن' : 'کلید و حساب سرویس';
}
function rebuildModelSelect() {
  const sel = $('#set-model');
  const p = PROVIDERS[modalProvider] || PROVIDERS.dahl;
  const models = p.models || {};
  let opts = '';
  if (modalProvider === 'cloudflare') {
    const groups = {
      'غول‌های بالای ۳۰۰B — با ارتقای پلن کلادفلر': ['@cf/zai-org/glm-5.3', '@cf/moonshotai/kimi-k2.6', '@cf/deepseek-ai/deepseek-v4-pro-0813', '@cf/zai-org/glm-5.3-flash', '@cf/deepseek-ai/deepseek-v4.1-flash-1017', '@cf/moonshotai/kimi-k2.7-code', '@cf/zai-org/glm-5.2'],
      'عمومی — مغز بزرگ': ['@cf/meta/llama-3.3-70b-instruct-fp8-fast', '@cf/openai/gpt-oss-120b', '@cf/nvidia/nemotron-3-120b-a12b', '@cf/openai/gpt-oss-20b', '@cf/meta/llama-4-scout-17b-16e-instruct', '@cf/mistralai/mistral-small-3.1-24b-instruct', '@cf/aisingapore/gemma-sea-lion-v4-27b-it', '@cf/zai-org/glm-4.7-flash', '@cf/google/gemma-4-26b-a4b-it'],
      'برنامه‌نویسی': ['@cf/moonshotai/kimi-k2.7-code', '@cf/qwen/qwen2.5-coder-32b-instruct', '@cf/qwen/qwen3-30b-a3b-fp8', '@cf/ibm-granite/granite-4.0-h-micro'],
      'استدلال عمیق (کندتر، با تفکر)': ['@cf/deepseek-ai/deepseek-v4-pro-0813', '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b', '@cf/qwen/qwq-32b'],
      'سریع — گفتگو، صوتی و پلن رایگان': ['@cf/meta/llama-3.1-8b-instruct-fast', '@cf/meta/llama-3.1-8b-instruct-fp8', '@cf/meta/llama-3.2-3b-instruct', '@cf/mistral/mistral-7b-instruct-v0.1'],
      'چندوجهی — این‌ها عکس را می‌بینند': ['@cf/meta/llama-4-scout-17b-16e-instruct', '@cf/qwen/qwen3.8-27b', '@cf/zai-org/glm-5.3-flash', '@cf/moonshotai/kimi-k2.6', '@cf/deepseek-ai/deepseek-v4.1-flash-1017']
    };
    for (const g in groups) {
      opts += '<optgroup label="' + esc(g) + '">';
      groups[g].forEach((id) => { if (models[id]) opts += '<option value="' + esc(id) + '">' + esc(models[id]) + '</option>'; });
      opts += '</optgroup>';
    }
  } else {
    opts = Object.keys(models).map((id) => '<option value="' + esc(id) + '">' + esc(models[id]) + '</option>').join('');
  }
  opts += '<option value="custom">مدل دلخواه…</option>';
  sel.innerHTML = opts;
  const ids = Object.keys(models);
  const cur = $('#set-model-custom') ? $('#set-model-custom').value.trim() : '';
  const want = settings.model;
  sel.value = (ids.indexOf(want) !== -1) ? want : 'custom';
  if (modalProvider === 'custom') sel.value = 'custom';
  $('#set-model-custom').value = want && sel.value === 'custom' ? (settings.modelCustom || (want !== 'custom' ? want : cur)) : (settings.modelCustom || '');
  $('#set-model-custom').classList.toggle('hidden', sel.value !== 'custom');
  $('#provider-hint').innerHTML = (p.needsToken === false
    ? (modalProvider === 'dahl'
      ? 'کلید و آدرس دال از قبل تنظیم شده ✓ — فقط مدل را انتخاب کن و بفرست (تست‌شده با درخواست واقعی)'
      : modalProvider === 'freemodel'
      ? 'کلید فری‌مدل از قبل تنظیم شده ✓ — فقط ۲۹ مدلِ «فعال» کاتالوگ رسمی اینجاست (مدل‌های در حال تعمیر حذف شده‌اند). اگر سرویس جواب نداد، خودکار با دال و بعد پولینیشن جواب می‌گیری.'
      : modalProvider === 'coarena'
      ? 'کلید کوآرنا از قبل تنظیم شده ✓ — هر ۱۸ مدل با درخواست واقعی فارسی تست شده‌اند و همه عکس می‌بینند. محدودیت: حداکثر ۲ درخواست همزمان؛ اگر شلوغ بود خودکار با فری‌مدل و بعد پولینیشن جواب می‌گیری.'
      : 'بدون کلید و بدون ثبت‌نام — همین حالا کار می‌کند')
    : 'دریافت کلید: <span class="en" dir="ltr">' + esc(p.tokenUrl) + '</span>' + (p.needsAccount ? ' + Account ID' : '')) +
    (modalProvider === 'dahl' ? ' — مدل‌های دال: GLM 5.3 Flash · MiniMax M2.7 · DeepSeek V4 Flash' : '') +
    (modalProvider === 'coarena' ? ' — پیشنهادی: Claude Sonnet 5.5 برای گفتگو · Gemini 3.8 Flash برای عکس · پارامترهای هر مدل در دکمهٔ «پارامترها»' : '') +
    (modalProvider === 'pollinations' ? ' — محدودیت رایگان: هر ۴۵ ثانیه یک پیام؛ برای کار سنگین کلادفلر یا Groq را انتخاب کن' : '') +
    (modalProvider === 'groq' ? ' — رایگان حدود ۳۰ درخواست در دقیقه' : '') +
    (modalProvider === 'zai' ? ' — مدل‌های جدیدتر GLM را می‌توانی دستی بنویسی (مثل glm-5.x)' : '');
  applyProviderUI();
  updateModelTrigger();
}

function openSettings() {
  modalProvider = settings.provider || 'dahl';
  $('#set-provider').value = modalProvider;
  switchTab('general');
  $('#set-dahl-base').value = settings.dahlBase || DAHL_DEFAULT_BASE;
  $('#set-dahl-key').value = settings.dahlToken || DAHL_DEFAULT_KEY;
  $('#set-fm-base').value = settings.fmBase || FM_DEFAULT_BASE;
  $('#set-fm-key').value = settings.fmToken || FM_DEFAULT_KEY;
  $('#set-coa-base').value = settings.coaBase || COA_DEFAULT_BASE;
  $('#set-coa-key').value = settings.coaToken || COA_DEFAULT_KEY;
  $('#set-token').value = settings.token;
  $('#set-account').value = settings.account;
  $('#set-base').value = settings.base;
  rebuildModelSelect();
  $('#set-sysprompt').value = settings.sys || '';
  $('#set-style').value = settings.style || 'detailed';
  $('#set-temp').value = settings.temp;
  $('#temp-val').textContent = settings.temp;
  $('#set-web').value = settings.webSearch || 'auto';
  $('#set-agent').checked = settings.agentTools !== false;
  $('#set-autospeak').checked = !!settings.autoSpeak;
  $('#set-rate').value = settings.speakRate || 1;
  $('#rate-val').textContent = settings.speakRate || 1;
  /* v1.14.0: بخش API صدای ابری */
  const ta = settings.ttsApi || TTS_DEF;
  $('#set-tts-kind').value = ta.kind === 'openai' ? 'openai' : 'ttsai';
  $('#set-tts-url').value = ta.url || TTS_DEF.url;
  $('#set-tts-key').value = ta.key || TTS_DEF.key;
  $('#set-tts-model').value = ta.model || TTS_DEF.model;
  $('#set-tts-voice').value = ta.voice || TTS_DEF.voice;
  /* v1.14.0: تنظیمات گفتگوی صوتی */
  $('#set-vc-autosend').value = String(settings.vcAutoSend || 1.5);
  $('#set-vc-loop').checked = settings.vcLoop !== false;
  $('#set-vc-transcript').checked = settings.vcTranscript !== false;
  $('#set-vm-theme').value = settings.vmTheme || 'violet';
  $('#set-vm-lang').value = settings.vmLang || 'fa-IR';
  $('#set-imgengine').value = settings.imageEngine || 'auto';
  $('#set-imgstyle').value = settings.imgStyle || 'none';
  $('#set-theme').value = THEME_META[settings.theme] ? settings.theme : 'night';
  renderThemeGrid();
  $('#set-font').value = settings.fontScale || 1;
  $('#font-val').textContent = Math.round((settings.fontScale || 1) * 100) + '٪';
  $('#set-anim').checked = settings.anim !== false;
  $('#set-runerrors').checked = settings.runErrors !== false;
  $('#set-gamebigrun').checked = settings.gameBigRun !== false;
  $('#tts-test-result').textContent = ''; $('#tts-test-result').className = 'test-result';
  $('#test-result').textContent = ''; $('#test-result').className = 'test-result';
  $('#settings-backdrop').classList.remove('hidden');
}
function closeSettings() { $('#settings-backdrop').classList.add('hidden'); }

function readSettingsFromModal() {
  const sel = $('#set-model');
  const customVal = $('#set-model-custom').value.trim();
  return {
    dahlToken: ($('#set-dahl-key').value || '').trim() || DAHL_DEFAULT_KEY,
    dahlBase: ($('#set-dahl-base').value || '').trim() || DAHL_DEFAULT_BASE,
    fmToken: ($('#set-fm-key').value || '').trim() || FM_DEFAULT_KEY,
    fmBase: ($('#set-fm-base').value || '').trim() || FM_DEFAULT_BASE,
    coaToken: ($('#set-coa-key').value || '').trim() || COA_DEFAULT_KEY,
    coaBase: ($('#set-coa-base').value || '').trim() || COA_DEFAULT_BASE,
    token: $('#set-token').value.trim(),
    account: $('#set-account').value.trim(),
    base: $('#set-base').value.trim(),
    provider: $('#set-provider').value || 'dahl',
    model: sel.value === 'custom' ? (customVal || sel.value) : sel.value,
    modelCustom: customVal,
    sys: $('#set-sysprompt').value.trim(),
    style: $('#set-style').value,
    temp: $('#set-temp').value,
    webSearch: $('#set-web').value,
    agentTools: $('#set-agent').checked,
    autoSpeak: $('#set-autospeak').checked,
    speakRate: Number($('#set-rate').value) || 1,
    /* v1.14.0: API صدای ابری + تنظیمات گفتگوی صوتی */
    ttsApi: {
      kind: $('#set-tts-kind').value === 'openai' ? 'openai' : 'ttsai',
      url: ($('#set-tts-url').value || '').trim() || TTS_DEF.url,
      key: ($('#set-tts-key').value || '').trim() || TTS_DEF.key,
      model: ($('#set-tts-model').value || '').trim() || TTS_DEF.model,
      voice: ($('#set-tts-voice').value || '').trim() || TTS_DEF.voice
    },
    vcAutoSend: Number($('#set-vc-autosend').value) || 1.5,
    vcLoop: $('#set-vc-loop').checked,
    vcTranscript: $('#set-vc-transcript').checked,
    vmTheme: $('#set-vm-theme').value || 'violet',
    vmLang: $('#set-vm-lang').value || 'fa-IR',
    imageEngine: $('#set-imgengine').value || 'auto',
    imgStyle: $('#set-imgstyle').value || 'none',
    theme: $('#set-theme').value || 'night',
    fontScale: Number($('#set-font').value) || 1,
    anim: $('#set-anim').checked,
    runErrors: $('#set-runerrors').checked,
    gameBigRun: $('#set-gamebigrun').checked,
    cat: settings.cat,
    modelPicked: true
  };
}

function saveFromStudioDefaults() {
  /* سبک انتخابی استودیو را هم در تنظیمات نگه دار */
  const v = $('#set-imgstyle');
  if (v) { settings.imgStyle = v.value || 'none'; saveSettings(settings); }
}
function saveFromModal() {
  /* v1.14.0 (رفع باگ «مدل روی GLM ماند»): ادغام به‌جای جایگزینی!
     قبلاً readSettingsFromModal همه‌چیز را عوض می‌کرد و پرچم داخلی dahlMigrated
     گم می‌شد → در اجرای بعدی، مهاجرت یک‌بارهٔ v1.8.0 دوباره اجرا می‌شد و مدلِ
     انتخابی کاربر را به زور به GLM برمی‌گرداند. حالا پرچم‌های داخلی حفظ می‌شوند */
  settings = Object.assign({}, settings, readSettingsFromModal());
  saveSettings(settings);
  applyLook();
  refreshStatus(); updateWebBtn(); updateImageBtn(); closeSettings();
  toast('تنظیمات ذخیره شد');
  liveCheck();
}

function refreshStatus() {
  const p = PROVIDERS[settings.provider] || PROVIDERS.dahl;
  const isDahl = settings.provider === 'dahl';
  const needTok = isDahl ? false : (p.needsToken !== false);
  const needAcct = p.needsAccount && !(settings.base || '').trim();
  const ok = (!needTok || (isDahl ? !!(settings.dahlToken || DAHL_DEFAULT_KEY) : settings.token.trim())) && (!needAcct || settings.account.trim());
  const dot = $('#status-dot');
  if (dot.className.indexOf('dot-live') === -1) {
    dot.className = 'dot ' + (ok ? 'dot-on' : 'dot-off');
    $('#status-text').textContent = ok ? (needTok ? 'متصل — ' + p.name : isDahl ? 'آماده — ' + p.name : 'آماده — ' + p.name + ' (بدون کلید)') : 'تنظیمات لازم است';
  }
  $('#model-badge span').textContent = prettyModel(chosenModel());
  /* v1.9.0: چیپ وضعیت روی صفحهٔ خوش‌آمد هم به‌روز شود */
  const wst = $('#w-status');
  if (wst) {
    const wd = wst.querySelector('.dot');
    const wt = wst.querySelector('span');
    if (wd) wd.className = 'dot ' + (ok ? 'dot-on' : 'dot-off');
    if (wt) wt.textContent = ok ? 'متصل — مغز ' + prettyModel(chosenModel()) : 'آماده — فقط تنظیمات لازم است';
  }
  updateParamsBtn();
  refreshCatBadge();
}

/* — وضعیت زنده: چراغ سبز فقط وقتی که اتصالِ واقعی به مدل جواب داده باشد —
   اگر مدل/موجودی/اتصال سرویس اصلی مشکل داشت، خودکار با سرویس رایگان تست و سبز می‌شود */
function liveCheck() {
  const p = PROVIDERS[settings.provider] || PROVIDERS.dahl;
  const isDahl = settings.provider === 'dahl';
  const needTok = isDahl ? false : (p.needsToken !== false);
  const needAcct = p.needsAccount && !(settings.base || '').trim();
  if ((needTok && !settings.token.trim()) || (needAcct && !settings.account.trim())) return;
  const chain = providerChain();
  const attempt = (pi, model, retriedModel) => {
    if (pi >= chain.length) {
      $('#status-dot').className = 'dot dot-off';
      $('#status-text').textContent = 'اتصال برقرار نشد — اینترنت را بررسی کن';
      return;
    }
    const pid = chain[pi];
    activeProvider = pid;
    const url = apiUrl(pid);
    if (!url) { attempt(pi + 1, null, false); return; }
    const mdl = model || chosenModel(pid);
    let acc = '';
    /* مدل‌های استدلالی دال فکرشان را از سهم می‌خورند — سهم کم یعنی جواب خالی و چراغِ قرمزِ بی‌دلیل */
    const body = { model: mdl, stream: true, max_tokens: pid === 'dahl' ? 600 : 24, messages: [{ role: 'user', content: 'سلام' }] };
    streamRequest(url, apiHeaders(pid), body, (t) => { acc += t; }, (err) => {
      const dot = $('#status-dot'), txt = $('#status-text');
      if (err && err.indexOf('[model-unavailable]') !== -1 && !retriedModel) {
        attempt(pi, fallbackModel(mdl), true);
        return;
      }
      /* v1.10.1: مغز دال شلوغ بود؟ با مغزِ آزادِ همان سرویس چراغ را سبز کن (یک بار) */
      if (err && err.indexOf('[model-busy]') !== -1 && !retriedModel && pi === 0 && pid === 'dahl') {
        const dahlIds = Object.keys(PROVIDERS.dahl.models);
        const alt = (BUSY_ALT_MODELS || []).find((id) => id !== mdl && dahlIds.indexOf(id) !== -1);
        if (alt) {
          BUSY_ALT_MODELS = [];
          attempt(pi, alt, true);
          return;
        }
      }
      if (err && pi < chain.length - 1) {
        /* هر خطایی (موجودی/دسترسی/شبکه) → سرویس بعدی زنجیره */
        attempt(pi + 1, null, false);
        return;
      }
      activeProvider = null;
      if (!err && stripThink(acc).text.trim()) {
        dot.className = 'dot dot-on dot-live';
        txt.textContent = (pi > 0 || retriedModel ? 'آنلاین ✓ — با ' : 'آنلاین و سبز ✓ — ') + (PROVIDERS[pid] || {}).name + ' · ' + prettyModel(mdl);
      } else {
        dot.className = 'dot dot-off';
        txt.textContent = 'اتصال برقرار نشد — در تنظیمات «تست اتصال» را بزن';
      }
    });
  };
  attempt(0, null, false);
}

/* ---------- brain modal ---------- */
function timeAgo(ts) {
  const s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return 'همین حالا';
  const m = Math.floor(s / 60); if (m < 60) return m + ' دقیقه پیش';
  const h = Math.floor(m / 60); if (h < 24) return h + ' ساعت پیش';
  const d = Math.floor(h / 24); return d + ' روز پیش';
}
function renderMemoryList() {
  const list = $('#mem-list');
  const count = $('#mem-count');
  list.innerHTML = '';
  count.innerHTML = '<svg class="ic"><use href="#i-chip"/></svg><span>' + memories.length + ' خاطره در مغز سوکوت' + (memories.length >= 80 ? ' (حداکثر ۸۰)' : '') + '</span>';
  if (!memories.length) {
    list.innerHTML = '<div class="mem-empty">مغز سوکوت هنوز خالی است.<br>چند چیز دربارهٔ خودت بگو تا یادش بماند — مثلاً «اسم من … است و در … زندگی می‌کنم».</div>';
    return;
  }
  for (const m of memories) {
    const d = document.createElement('div');
    d.className = 'mem-item';
    d.innerHTML =
      '<svg class="ic"><use href="#i-spark"/></svg>' +
      '<div class="txt">' + esc(m.text) + '<div class="when">' + timeAgo(m.at) + ' · ' + (m.src === 'auto' ? 'یادگیری خودکار' : 'یادداشت دستی') + '</div></div>' +
      '<button title="حذف"><svg class="ic"><use href="#i-trash"/></svg></button>';
    d.querySelector('button').addEventListener('click', () => {
      memories = memories.filter((x) => x.id !== m.id);
      saveMemories(); renderMemoryList();
    });
    list.appendChild(d);
  }
}
function openBrain() {
  renderMemoryList();
  $('#brain-backdrop').classList.remove('hidden');
  setTimeout(() => { try { $('#mem-input').focus(); } catch (e) {} }, 60);
}
function closeBrain() { $('#brain-backdrop').classList.add('hidden'); }
function addMemoryFromInput() {
  const v = $('#mem-input').value.trim();
  if (!v) return;
  if (addMemory(v, 'manual')) {
    $('#mem-input').value = '';
    renderMemoryList();
    toast('در مغز سوکوت حک شد');
  } else {
    toast('این خاطره تکراری است', true);
  }
}

/* ---------- toast ---------- */
let toastTimer = null;
function toast(msg, isErr) {
  const t = $('#toast');
  t.textContent = msg;
  t.className = 'toast' + (isErr ? ' err' : '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.className = 'toast hidden'; }, 2600);
}

/* ---------- misc UI ---------- */
function autoGrow() {
  const t = $('#input');
  t.style.height = 'auto';
  t.style.height = Math.min(t.scrollHeight, 140) + 'px';
}

/* تأیید دومرحله‌ای برای کارهای خطرناک (confirm() در WebView کار نمی‌کند) */
function armTwoStep(btn, action) {
  btn.addEventListener('click', () => {
    if (btn.dataset.armed === '1') {
      btn.dataset.armed = '0';
      btn.innerHTML = btn.dataset.orig || btn.innerHTML;
      action();
      return;
    }
    btn.dataset.orig = btn.innerHTML;
    btn.dataset.armed = '1';
    btn.innerHTML = '<svg class="ic"><use href="#i-alert"/></svg><span>مطمئنی؟ دوباره بزن</span>';
    setTimeout(() => { if (btn.dataset.armed === '1') { btn.dataset.armed = '0'; btn.innerHTML = btn.dataset.orig; } }, 3500);
  });
}

/* ---------- boot ---------- */
function boot() {
  $('#btn-new-chat').addEventListener('click', newChat);
  $('#btn-settings').addEventListener('click', openSettings);
  $('#btn-close-settings').addEventListener('click', closeSettings);
  $('#settings-backdrop').addEventListener('click', (e) => { if (e.target.id === 'settings-backdrop') closeSettings(); });
  $('#btn-save-settings').addEventListener('click', saveFromModal);
  $('#btn-clear-chat').addEventListener('click', () => {
    const c = currentChat(); if (!c) return;
    c.msgs = []; saveChats(chats); renderMessages();
    toast('گفتگو پاک شد');
  });
  $('#btn-send').addEventListener('click', () => {
    if (activeStream) stopStream(); else send();
  });
  $('#btn-test').addEventListener('click', () => {
    const r = $('#test-result');
    r.className = 'test-result'; r.textContent = 'در حال تست اتصال…';
    const old = settings;
    /* v1.14.0: ادغام — پرچم‌های داخلی حذف نشوند (مانند saveFromModal) */
    settings = Object.assign({}, settings, readSettingsFromModal());
    testConnection((ok, msg) => {
      r.className = 'test-result ' + (ok ? 'ok' : 'err');
      r.textContent = ok ? msg : msg;
      if (!ok) settings = old;
    });
  });
  $('#set-model').addEventListener('change', () => {
    $('#set-model-custom').classList.toggle('hidden', $('#set-model').value !== 'custom');
  });
  $('#set-provider').addEventListener('change', () => {
    modalProvider = $('#set-provider').value;
    /* v1.10.0: تغییر پلن همین لحظه ذخیره و اعمال می‌شود —
       انتخاب‌گرِ مدل بلافاصله مدل‌های همان پلن را نشان می‌دهد (رفع باگ «فقط ۳ مدل») */
    settings.provider = modalProvider;
    const pmodels = Object.keys((PROVIDERS[modalProvider] || {}).models || {});
    const modelOk = settings.model === 'custom' || pmodels.indexOf(settings.model) !== -1;
    if (!pmodels.length) {
      /* سرویس دلخواه: مدل دستی می‌ماند */
    } else if (modalProvider === 'cloudflare' && !modelOk) {
      settings.model = DEFAULT_MODEL;
    } else if (!modelOk) {
      settings.model = pmodels[0];
    }
    saveSettings(settings);
    rebuildModelSelect();
    refreshStatus();
    liveCheck();
    toast('پلن «' + (PROVIDERS[modalProvider] || {}).name + '» فعال شد — مدل‌هایش در انتخاب‌گر آماده است ✓');
  });
  $('#set-temp').addEventListener('input', () => { $('#temp-val').textContent = $('#set-temp').value; });
  $('#set-rate').addEventListener('input', () => { $('#rate-val').textContent = $('#set-rate').value; });
  $('#btn-tts-test').addEventListener('click', testSpeak);
  /* v1.14.0: عوض‌کردن نوع API صدا — مقادیر پیش‌فرض همان حالت پر می‌شود */
  $('#set-tts-kind').addEventListener('change', () => {
    if ($('#set-tts-kind').value === 'openai') {
      if (!$('#set-tts-url').value.trim() || /tts\.ai/i.test($('#set-tts-url').value)) $('#set-tts-url').value = 'https://api.openai.com/v1';
      if (!$('#set-tts-model').value.trim() || $('#set-tts-model').value === TTS_DEF.model) $('#set-tts-model').value = 'gpt-4o-mini-tts';
      if (!$('#set-tts-voice').value.trim() || $('#set-tts-voice').value === TTS_DEF.voice) $('#set-tts-voice').value = 'alloy';
    } else {
      $('#set-tts-url').value = TTS_DEF.url;
      $('#set-tts-model').value = TTS_DEF.model;
      $('#set-tts-voice').value = TTS_DEF.voice;
    }
  });

  /* — v1.14.0: گفتگوی صوتی زنده — */
  $('#btn-voice').addEventListener('click', openVoiceMode);
  $('#btn-vc-close').addEventListener('click', closeVoiceMode);
  $('#voice-backdrop').addEventListener('click', (e) => { if (e.target.id === 'voice-backdrop') closeVoiceMode(); });
  $('#btn-vc-mic').addEventListener('click', () => {
    if (VoiceMode.listening) { stopListening(); vcSetState('idle'); }
    else if (vcSupport()) startListening();
    else { const u = $('#vc-unsupported'); if (u) u.classList.remove('hidden'); }
  });
  $('#btn-vc-stop').addEventListener('click', () => { stopSpeak(); vcSetState(VoiceMode.listening ? 'listening' : 'idle'); });
  const vcSend = () => {
    const el = $('#vc-type');
    const v = (el.value || '').trim();
    if (!v) return;
    el.value = '';
    stopListening();
    vcSetState('thinking');
    send(v);
  };
  $('#btn-vc-send').addEventListener('click', vcSend);
  $('#vc-type').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); vcSend(); } });

  /* تب‌های تنظیمات */
  document.querySelectorAll('#set-tabs .tab-btn').forEach((b) => {
    b.addEventListener('click', () => switchTab(b.dataset.tab));
  });

  /* حالت ساخت عکس (مثل ChatGPT) + استودیو */
  $('#btn-image').addEventListener('click', () => {
    settings.imageMode = !settings.imageMode;
    settings.imgStyle = $('#set-imgstyle') ? ($('#set-imgstyle').value || 'none') : settings.imgStyle;
    saveSettings(settings);
    updateImageBtn();
    toast(settings.imageMode ? 'حالت ساخت عکس روشن شد — بنویس چه عکسی بسازم 🎨' : 'حالت ساخت عکس خاموش شد — به حالت گفتگو برگشتم');
  });
  $('#btn-open-studio').addEventListener('click', () => { saveFromStudioDefaults(); closeSettings(); openStudio(); });
  $('#btn-close-studio').addEventListener('click', closeStudio);
  $('#studio-backdrop').addEventListener('click', (e) => { if (e.target.id === 'studio-backdrop') closeStudio(); });
  $('#btn-studio-go').addEventListener('click', () => studioGenerate(false));
  document.querySelectorAll('#studio-styles .style-chip').forEach((b) => {
    b.addEventListener('click', () => {
      studioStyle = b.dataset.style;
      document.querySelectorAll('#studio-styles .style-chip').forEach((x) => x.classList.toggle('active', x === b));
    });
  });

  /* ظاهر و تم — v1.9.0: همه‌چیز زنده و فوری اعمال می‌شود */
  renderThemeGrid();
  $('#set-font').addEventListener('input', () => {
    $('#font-val').textContent = Math.round($('#set-font').value * 100) + '٪';
    settings.fontScale = Number($('#set-font').value) || 1;
    applyLook();
  });
  $('#set-font').addEventListener('change', () => { saveSettings(settings); toast('اندازهٔ متن ذخیره شد'); });
  $('#set-anim').addEventListener('change', () => {
    settings.anim = $('#set-anim').checked;
    saveSettings(settings);
    applyLook();
    toast(settings.anim === false ? 'انیمیشن‌ها خاموش شد' : 'انیمیشن‌ها روشن شد');
  });

  /* v1.9.0: انتخاب‌گر مدل — از نشان بالا و از تنظیمات */
  $('#model-badge').addEventListener('click', () => openModelPicker(false));
  const trig = $('#set-model-trigger');
  if (trig) trig.addEventListener('click', () => openModelPicker(true));
  $('#btn-close-model').addEventListener('click', closeModelPicker);
  $('#model-backdrop').addEventListener('click', (e) => { if (e.target.id === 'model-backdrop') closeModelPicker(); });
  $('#btn-pick-custom').addEventListener('click', () => {
    const v = ($('#pick-custom-id').value || '').trim();
    if (!v) { toast('آیدی دقیق مدل را وارد کن', true); return; }
    applyPickedModel(v, true);
  });

  /* — v1.15.0: پنل پارامترهای هوش مصنویی — موبایل و کامپیوتر — */
  $('#btn-params').addEventListener('click', openParamsModal);
  $('#btn-close-params').addEventListener('click', closeParamsModal);
  $('#params-backdrop').addEventListener('click', (e) => { if (e.target.id === 'params-backdrop') closeParamsModal(); });
  $('#pt-temp').addEventListener('input', () => { $('#pt-temp-val').textContent = $('#pt-temp').value; });
  $('#pt-topp').addEventListener('input', () => { $('#pt-topp-val').textContent = $('#pt-topp').value; });
  $('#pt-max').addEventListener('input', () => {
    $('#pt-max-val').textContent = faTok(Number($('#pt-max').value));
    document.querySelectorAll('#pt-max-chips button').forEach((x) => x.classList.toggle('active', Number(x.dataset.max) === Number($('#pt-max').value)));
  });
  $('#pt-auto').addEventListener('change', () => {
    const auto = $('#pt-auto').checked;
    $('#pt-max').classList.toggle('off', auto);
    $('#pt-max-val').textContent = auto ? 'خودکار' : faTok(Number($('#pt-max').value));
  });
  document.querySelectorAll('#pt-max-chips button').forEach((b) => {
    b.addEventListener('click', () => {
      $('#pt-auto').checked = false;
      $('#pt-max').classList.remove('off');
      $('#pt-max').value = b.dataset.max;
      $('#pt-max-val').textContent = faTok(Number(b.dataset.max));
      document.querySelectorAll('#pt-max-chips button').forEach((x) => x.classList.toggle('active', x === b));
    });
  });
  document.querySelectorAll('#params-scope .seg-btn').forEach((b) => {
    b.addEventListener('click', () => { paramsScope = b.dataset.scope; syncParamsScope(); });
  });
  $('#btn-params-done').addEventListener('click', saveParamsModal);
  $('#btn-params-reset').addEventListener('click', resetParamsModal);

  /* مدیریت API: حذف API ذخیره‌شده (تأیید دومرحله‌ای) */
  armTwoStep($('#btn-api-delete'), () => {
    settings.token = ''; settings.account = ''; settings.base = '';
    saveSettings(settings);
    $('#set-token').value = ''; $('#set-account').value = ''; $('#set-base').value = '';
    refreshStatus();
    toast('کلید و حساب ذخیره‌شده حذف شد');
  });

  /* امنیت و حریم خصوصی */
  armTwoStep($('#btn-clear-chats'), () => {
    chats = []; currentId = null;
    try { store.removeItem(LS_CHAT); } catch (e) {}
    newChat();
    toast('همهٔ گفتگوها پاک شد', true);
  });
  armTwoStep($('#btn-clear-mem'), () => {
    memories = [];
    try { store.removeItem(LS_MEM); } catch (e) {}
    toast('حافظهٔ بلندمدت پاک شد', true);
  });
  armTwoStep($('#btn-clear-all'), () => {
    try { store.removeItem(LS_CHAT); store.removeItem(LS_MEM); store.removeItem(LS_SET); } catch (e) {}
    location.reload();
  });

  /* اجرای زنده: ویرایشگر + رفع خطا */
  $('#btn-run-edit').addEventListener('click', () => {
    const ed = $('#run-editor');
    const show = ed.classList.contains('hidden');
    ed.classList.toggle('hidden', !show);
    if (show) $('#run-code').value = runActiveCode || '';
  });
  $('#btn-ed-run').addEventListener('click', () => {
    const v = $('#run-code').value;
    if (!v.trim()) { toast('کد خالی است', true); return; }
    runCodeRaw(v, runActiveLang);
  });
  $('#btn-ed-reset').addEventListener('click', () => {
    if (runOriginalCode) {
      runCodeRaw(runOriginalCode, runActiveLang);
      $('#run-code').value = runOriginalCode;
      toast('کد اصلی بازگردانده شد');
    }
  });
  $('#btn-run-fix').addEventListener('click', fixGameWithSukot);

  /* اجرای زندهٔ بازی/کد */
  $('#btn-run-close').addEventListener('click', closeRunOverlay);
  $('#run-backdrop').addEventListener('click', (e) => { if (e.target.id === 'run-backdrop') closeRunOverlay(); });
  $('#btn-run-reload').addEventListener('click', () => {
    runCodeRaw(runActiveCode || '', runActiveLang);
  });
  $('#btn-run-full').addEventListener('click', () => {
    const el = $('#run-frame');
    try {
      if (document.fullscreenElement) { document.exitFullscreen(); return; }
      if (el.requestFullscreen) el.requestFullscreen();
    } catch (e) { toast('تمام‌صفحه در این دستگاه پشتیبانی نمی‌شود', true); }
  });

  /* categories: welcome cards + header badge + modal — v1.9.0: کارت «ساخت عکس» استودیو را باز می‌کند */
  document.querySelectorAll('.cat-card').forEach((b) => {
    b.addEventListener('click', () => {
      if (b.dataset.cat === 'image') {
        saveFromStudioDefaults();
        openStudio();
        return;
      }
      applyCat(b.dataset.cat, false);
      if ($('#cat-backdrop') && !$('#cat-backdrop').classList.contains('hidden')) closeCat();
    });
  });
  $('#cat-badge').addEventListener('click', () => { markCatCards(); $('#cat-backdrop').classList.remove('hidden'); });
  $('#btn-close-cat').addEventListener('click', closeCat);
  $('#cat-backdrop').addEventListener('click', (e) => { if (e.target.id === 'cat-backdrop') closeCat(); });
  function closeCat() { $('#cat-backdrop').classList.add('hidden'); }

  /* web search quick toggle */
  $('#btn-web').addEventListener('click', cycleWebMode);

  /* code-copy (event delegation — bubbles re-render while streaming) */
  $('#messages').addEventListener('click', (e) => {
    const runBtn = e.target.closest('.code-run');
    if (runBtn) {
      const rblock = runBtn.closest('.codeblock');
      if (rblock) { runCodeFromBlock(rblock); return; }
    }
    const btn = e.target.closest('.code-copy');
    if (!btn) return;
    const block = btn.closest('.codeblock');
    if (!block) return;
    const cid = block.dataset.cid;
    const raw = (cid && codeStore.has(cid)) ? codeStore.get(cid) : block.querySelector('code').innerText;
    copyText(raw, () => {
      btn.classList.add('copied');
      btn.innerHTML = '<svg class="ic ic-sm"><use href="#i-check"/></svg><span>کپی شد!</span>';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = '<svg class="ic ic-sm"><use href="#i-copy"/></svg><span>کپی کد</span>';
      }, 1800);
    });
  });

  /* brain */
  $('#btn-brain-side').addEventListener('click', openBrain);
  $('#btn-close-brain').addEventListener('click', closeBrain);
  $('#brain-backdrop').addEventListener('click', (e) => { if (e.target.id === 'brain-backdrop') closeBrain(); });
  $('#btn-mem-add').addEventListener('click', addMemoryFromInput);
  $('#mem-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); addMemoryFromInput(); }
  });
  $('#btn-mem-clear').addEventListener('click', () => {
    memories = []; saveMemories(); renderMemoryList();
    toast('مغز سوکوت پاک شد', true);
  });

  /* about */
  $('#btn-about').addEventListener('click', () => { $('#about-backdrop').classList.remove('hidden'); });
  $('#btn-close-about').addEventListener('click', () => { $('#about-backdrop').classList.add('hidden'); });
  $('#about-backdrop').addEventListener('click', (e) => { if (e.target.id === 'about-backdrop') $('#about-backdrop').classList.add('hidden'); });

  /* پیوست فایل و عکس: دکمه، کشیدن و رها کردن، چسباندن از کلیپ‌بورد */
  const fileInput = $('#file-input');
  $('#btn-attach').addEventListener('click', () => { try { fileInput.value = ''; } catch (e) {} fileInput.click(); });
  fileInput.addEventListener('change', () => { processFiles(fileInput.files); });
  const dropZone = $('#main');
  ['dragover', 'dragenter'].forEach((ev) => dropZone.addEventListener(ev, (e) => { e.preventDefault(); dropZone.classList.add('dragging'); }));
  ['dragleave', 'drop'].forEach((ev) => dropZone.addEventListener(ev, (e) => { e.preventDefault(); dropZone.classList.remove('dragging'); }));
  dropZone.addEventListener('drop', (e) => { if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) processFiles(e.dataTransfer.files); });
  $('#input').addEventListener('paste', (e) => {
    try {
      if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length) {
        e.preventDefault(); processFiles(e.clipboardData.files);
      }
    } catch (err) {}
  });

  $('#input').addEventListener('input', autoGrow);
  $('#input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  });
  $('#sidebar-toggle').addEventListener('click', () => $('#sidebar').classList.toggle('hidden'));

  /* لینک‌های خارجی (مثل کانال تلگرام): در اندروید/ویندوز با مرورگر سیستم باز شود */
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[target="_blank"]');
    if (!a) return;
    const url = a.getAttribute('href') || '';
    if (!/^https?:\/\//i.test(url)) return;
    e.preventDefault();
    try {
      if (ENV === 'android' && typeof AndroidAI !== 'undefined' && AndroidAI.openUrl) { AndroidAI.openUrl(url); return; }
      if (ENV === 'electron' && window.electronAPI && window.electronAPI.openExternal) { window.electronAPI.openExternal(url); return; }
    } catch (err) { /* fallthrough */ }
    window.open(url, '_blank', 'noopener');
  });

  document.querySelectorAll('.suggestion').forEach((b) => b.addEventListener('click', () => send(b.textContent)));

  /* v1.9.0: در موبایل سایدبار روی صفحهٔ خوش‌آمد نمی‌ماند — با اولین باز شدن بسته است */
  if (window.innerWidth <= 760) $('#sidebar').classList.add('hidden');

  markCatCards(); updateWebBtn(); updateImageBtn(); applyLook(); renderThemeGrid(); updateModelTrigger();
  studioStyle = settings.imgStyle || 'none';
  document.querySelectorAll('#studio-styles .style-chip').forEach((x) => x.classList.toggle('active', x.dataset.style === studioStyle));
  renderChatList(); renderMessages(); refreshStatus(); autoGrow();
  liveCheck();

  window.addEventListener('beforeunload', () => { try { stopSpeak(); } catch (e) {} });

  /* PWA: register service worker only when served over https */
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', boot);
