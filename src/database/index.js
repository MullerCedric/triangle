import { app } from "electron";

import Collection from "./model/Collection";
import CollectionConfiguration from "./model/CollectionConfiguration";
import ContentType from "./model/ContentType";
import ContentTypeExtension from "./model/ContentTypeExtension";
import Extension from "./model/Extension";
import FileTag from "./model/FileTag";
import Label from "./model/Label";
import Privacy from "./model/Privacy";
import Tag from "./model/Tag";
import UserPreference from "./model/UserPreference";

const profileName = "user1";
const profileDataPath = app.getPath("userData") + "\\" + profileName + "\\";

const collections = new Collection(profileDataPath, "collections");
const collection_configuration = new CollectionConfiguration(
  profileDataPath,
  "collection_configuration"
);
const content_types = new ContentType(profileDataPath, "content_types");
const content_type_extension = new ContentTypeExtension(
  profileDataPath,
  "content_type_extension"
);
const extensions = new Extension(profileDataPath, "extensions");
const files = new File(profileDataPath, "files");
const file_tag = new FileTag(profileDataPath, "file_tag");
const labels = new Label(profileDataPath, "labels");
const privacies = new Privacy(profileDataPath, "privacies");
const tags = new Tag(profileDataPath, "tags");
const user_preferences = new UserPreference(
  profileDataPath,
  "user_preferences"
);

export {
  collections,
  collection_configuration,
  content_types,
  content_type_extension,
  extensions,
  files,
  file_tag,
  labels,
  privacies,
  tags,
  user_preferences
};
