### react template

```
    # パッケージのインストール
    pnpm install
    # 開発サーバーの立ち上げ
    pnpm run dev
```

`vite.config.ts`をいじる

```
    export default defineConfig({
    plugins: [react()],
        server: {
            host: true,
        },
    });

```
