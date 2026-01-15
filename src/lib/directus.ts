import { authentication, createDirectus, rest } from "@directus/sdk";
import {getToken} from "@/lib/session";

const directus = createDirectus(process.env.DIRECTUS_URL || "", {
  globals: {
    fetch: async(url, options) => {
      const headers = {...options.headers || {}};
      const hasAuth: string = headers?.["Authorization"];

      if(!hasAuth) {
          const token: string = await getToken();
          headers["Authorization"] = `Bearer ${token}`;
      }

      return fetch(url, {...options, headers});
    }
  }
 })
 .with(authentication("json", {autoRefresh: false}))
 .with(rest())

 export default directus;