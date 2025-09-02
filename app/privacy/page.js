export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-gray-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-2 py-4 max-w-4xl relative z-10">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-4 shadow-lg">
          <h1 className="text-3xl font-bold text-emerald-400 mb-6">গোপনীয়তা নীতি</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-cyan-400 mb-4">
              সর্বশেষ আপডেট: জানুয়ারি ২০২৫
            </p>
            
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-teal-400 mb-3">১. আমরা যে তথ্য সংগ্রহ করি</h2>
              <p className="text-gray-200 mb-4">
                আমরা আপনার কাছ থেকে সরাসরি যে তথ্য পাই তা সংগ্রহ করি, যেমন যখন আপনি একটি অ্যাকাউন্ট তৈরি করেন, দান করেন, বা সহায়তার জন্য আমাদের সাথে যোগাযোগ করেন। এর মধ্যে আপনার নাম, ইমেইল ঠিকানা, ফোন নম্বর এবং অন্যান্য যোগাযোগের তথ্য অন্তর্ভুক্ত থাকতে পারে।
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-teal-400 mb-3">২. আমরা আপনার তথ্য কীভাবে ব্যবহার করি</h2>
              <p className="text-gray-200 mb-4">
                আমরা যে তথ্য সংগ্রহ করি তা আমাদের পরিষেবা প্রদান, রক্ষণাবেক্ষণ এবং উন্নত করতে, দান প্রক্রিয়া করতে, আপনার সাথে যোগাযোগ করতে এবং আইনি বাধ্যবাধকতা মেনে চলতে ব্যবহার করি।
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-teal-400 mb-3">৩. তথ্য ভাগাভাগি</h2>
              <p className="text-gray-200 mb-4">
                আমরা আপনার ব্যক্তিগত তথ্য আপনার সম্মতি ছাড়া তৃতীয় পক্ষের কাছে বিক্রি, বাণিজ্য বা হস্তান্তর করি না, এই গোপনীয়তা নীতিতে বর্ণিত বা আইন দ্বারা প্রয়োজনীয় ব্যতীত।
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-teal-400 mb-3">৪. তথ্য নিরাপত্তা</h2>
              <p className="text-gray-200 mb-4">
                আমরা আপনার ব্যক্তিগত তথ্য অননুমোদিত প্রবেশ, পরিবর্তন, প্রকাশ বা ধ্বংস থেকে রক্ষা করার জন্য উপযুক্ত নিরাপত্তা ব্যবস্থা বাস্তবায়ন করি।
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-teal-400 mb-3">৫. আপনার অধিকার</h2>
              <p className="text-gray-200 mb-4">
                আপনার ব্যক্তিগত তথ্য অ্যাক্সেস, আপডেট বা মুছে ফেলার অধিকার রয়েছে। আপনি আমাদের কাছ থেকে নির্দিষ্ট যোগাযোগ বন্ধ করতে পারেন।
              </p>
            </section>
            
            <section className="mb-6">
              <h2 className="text-2xl font-semibold text-teal-400 mb-3">৬. আমাদের সাথে যোগাযোগ করুন</h2>
              <p className="text-gray-200 mb-4">
                এই গোপনীয়তা নীতি সম্পর্কে আপনার কোন প্রশ্ন থাকলে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন: privacy@shubbandawatikafela.org
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 