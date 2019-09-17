# Conference Directory FAQ

For the first time, we are rolling-out a Conference Directory for CascadiaJS! The purpose of the Directory is to help attendees connect with one another. The directory will display who's coming to CascadiaJS 2019 and support filtering based on things like "lives in Vancouver, BC" or "builds apps using VueJS".

## Q: How do I get listed in the Directory?

When you purchase a ticket to CascadiaJS 2019, you'll have the option of creating a [Fizbuz](https://fizbuz.com) account. Fizbuz is a professional network designed for developers, and we're partnering with Fizbuz to help attendees connect with one another. 

![Fizbuz signup via CascadiaJS](${STATIC}/images/fizbuz-cascadiajs.png)

If you choose to create an account, you're all set! Your profile will automatically be associated with CascadiaJS 2019 and you'll show up in our Conference Directory.

## Q: What if I didn't create a Fizbuz account when I bought my ticket?

No problem!

1. [Create](https://fizbuz.com/signup) a Fizbuz account
2. Click on "edit" for Experiences
3. Click "Add Experience"
4. Enter the following information and click "Insert Experience"

![Fizbuz add CascadiaJS](${STATIC}/images/fizbuz-add-cascadiajs.png)

## Q: How do I get un-listed?

If you'd rather not be listed in the Conference Directory, you have two options:

1) Mark your CascadiaJS 2019 Experience as private

1. [Log-in](https://fizbuz.com/login) to your Fizbuz account
2. Click on "edit" for Experiences
3. Click on "edit" for CascadiaJS 2019
4. Flip "published" to off and click "Update Experience"

![editing a Fizbuz Experience](${STATIC}/images/fizbuz-exp-edit.png)

2) Mark your entire Fizbuz profile as private

1. [Log-in](https://fizbuz.com/login) to your Fizbuz account
3. Click "un-publish" for your profile

![marking a Fizbuz profile private](${STATIC}/images/fizbuz-unpublish.png)

## Q: Where does this data come from?

The CascadiaJS 2019 website is written in Node.js, hosted on [Begin](https://begin.com) and the [source code](https://github.com/cascadiajs/cascadiajs-2019) is available on Github. The Node.js application makes use of a Fizbuz GraphQL API to retreive information about the folks that are attendeeing CascadiaJS 2019. 

Here is a sample `curl` command: 

```
curl https://fizbuz.com/graphql \
  -d "query={accountsByPlaceID(placeID:\"PLxxx\"){name,nickname,image}}"
```

We're going to be adding more ways to find and connect with folks in the future, including filtering by technical skills (i.e. JavaScript) and location (i.e. Portland, OR). Stay tuned!