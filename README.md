### react template

```
    # パッケージのインストール
    pnpm i
    # 開発サーバーの立ち上げ
    pnpm dev
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
