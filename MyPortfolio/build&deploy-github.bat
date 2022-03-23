call ng build --prod --base-href "https://lenzoburger.github.io/MyPortfolio/"
call npx ngh --dir=dist/MyPortfolio --message="Auto commit & deploy"
call echo Successfully built and deployed!
