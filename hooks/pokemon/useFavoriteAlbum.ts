// hooks/pokemon/useFavoriteAlbum.ts
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

// 1. 定义「请求入参」类型（你要传给后端的东西）
export type FavoriteAlbumPayload = {
  albumId: number;
};

// 2. 定义「响应数据」类型（后端返回什么）
export type FavoriteAlbumResponse = {
  success: boolean;
  // 你可以按后端实际返回加字段，比如:
  // message?: string
};

async function favoriteAlbum(payload: FavoriteAlbumPayload): Promise<FavoriteAlbumResponse> {
  const url = "/api/favorite-album"; // 👈 改成你自己的接口

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as FavoriteAlbumResponse;
  console.log("[useFavoriteAlbum] response:", data); // ✅ 打印响应 JSON
  return data;
}

// 3. 真正暴露出去的 hook：和 useFetchAlbums 风格一致，不接参数
export function useFavoriteAlbum() {
  const queryClient = useQueryClient();

  return useMutation<FavoriteAlbumResponse, Error, FavoriteAlbumPayload>({
    mutationFn: favoriteAlbum,

    // ✅ 成功时：打印 + 让某些 query 失效（比如 albums 列表）
    onSuccess: (data, variables) => {
      console.log("[useFavoriteAlbum] success, payload:", variables, "data:", data);

      // 如果你有 useFetchAlbums，就可以这样刷新它：
      queryClient.invalidateQueries({ queryKey: ["albums"] });
    },

    // ✅ 失败时：打印错误，方便调试
    onError: (error, variables) => {
      console.error("[useFavoriteAlbum] error with payload:", variables, "error:", error);
    },
  });
}
