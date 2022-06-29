# Lower Third
a web-based lower third DSK overlay within browser source of broadcast apps (OBS, VMix, etc.)

this repo is originally a [NodeCG](http://github.com/nodecg/nodecg) [bundle](https://www.nodecg.dev/docs/concepts-and-terminology), but it could be used as static.


## Use 
### NodeCG bundle
It works with NodeCG versions which satisfy this [semver](https://docs.npmjs.com/getting-started/semantic-versioning) range: `^1.1.1`
You will need to have an appropriate version of NodeCG installed to use it.


### Static
- Open dashboard hosted on github pages : [https://akolites.github.io/lowerthird/dashboard/](https://akolites.github.io/lowerthird/dashboard/)
- Prepare text content from the dashboard
- Open link to preview the overlay, then copy generated link to browser source (OBS, VMix, etc.). generated link are based on `https://akolites.github.io/lowerthird/dashboard/graphics`


## Known Issue and Solutions
- Failed to render animation : 
    - (Windows) Start > 'Adjust the appearance and performance of Windows' (run `systempropertiesperformance.exe`)
    - Check 'Animate controls and elements inside Windows'