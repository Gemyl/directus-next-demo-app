import { authentication, createDirectus, rest } from "@directus/sdk";

 const directus = createDirectus(process.env.DIRECTUS_URL || "", {
  globals: {
    fetch: async(url, options) => {
      const headers = {...options.headers || {}};
      const existingAuth = headers?.["Authorization"];
      const staticToken = process.env.STATIC_TOKEN;

      if(!existingAuth && staticToken) {
        headers["Authorization"] = `Bearer ${process.env.STATIC_TOKEN}`
      }

      return fetch(url, {...options, headers});
    }
  }
 })
 .with(authentication("json", {autoRefresh: false}))
 .with(rest())

 export default directus;