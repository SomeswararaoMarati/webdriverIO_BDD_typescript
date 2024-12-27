

==== To Run all scenarios from all feature files 
npx wdio run wdio.conf.ts

==== To Run all scenarios from all feature files with matching tag
npx wdio run wdio.conf.ts --cucumberOpts.tagExpression '@smoke'

==== To Run all scenarios on given feature file
npx wdio run wdio.conf.ts --spec ./tests/features/myFeature.feature

==== To Run scenarios matched with given tag on given feature file 
npx wdio run wdio.conf.ts --spec ./tests/features/myFeature.feature --cucumberOpts.tagExpression '@smoke'



