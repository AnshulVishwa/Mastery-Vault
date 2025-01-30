// The Intl.DisplayNames API is used to translate standard region, language, or script codes (like "US", "IN", "JP") into a localized display name
const regionNamesInEnglish = new Intl.DisplayNames(["en"] , {
    type : "region"
})

const regionNamesInChinese = new Intl.DisplayNames(["zh-CN"] , {
    type : "region"
})

console.log( regionNamesInChinese.of("IN") )
// 印度 india in chinese