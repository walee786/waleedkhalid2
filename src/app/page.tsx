import React from "react";

const page = () => {
  return (
      <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img className="w-40 h-40 rounded-full mx-auto" src="/waleed.JPEG" alt="" width="384" height="512"/>
      <div className="pt-6 text-center space-y-4">
        <blockquote>
          <p className="Jameel Noori Nastaleeq-medium">
            “میرا نام ولید بن خالد ہے ۔میں رحیم یار خان کا رہائشی ہوں۔میں آرٹیفیشل انٹیجیلنس کا ستوڈنٹ ہوں۔
            میرے استاد محترم جناب آصف صاحب ہیں جو نہایت ہی اچھے اور شفیق استاد ہیں۔
            جو ہمیں بھت پیار سے اور انتھک محنت سے کام کروا رہے ہیں.”
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            ولید بن خالد
          </div>
          <div className="text-slate-700 dark:text-slate-500">
          پنجاب پولیس
          </div>
        </figcaption>
      </div>
    </figure></div>
  )
}
export default page