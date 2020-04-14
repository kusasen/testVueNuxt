export default function ({params, route, redirect}) {
    const locales = ['zh-hant','en-us'];
    if (!locales.indexOf(params.locale)) {
        redirect('/'+locales[0]+route.fullPath);
        return false
    }
    
}

// export default function ({params, route, redirect}) {
//     const locales = ['zh-hant','en-us'];
//     console.log([locales, route.fullPath])
//     if (!locales.includes(params.locale)) {
//         redirect(301, `/#{route.fullPath}`, { locale: locales[0] })
//         return false
//     }
// }