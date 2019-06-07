import { app } from "electron";

import Collection from "./model/Collection";
import CollectionConfiguration from "./model/CollectionConfiguration";
import ContentType from "./model/ContentType";
import ContentTypeExtension from "./model/ContentTypeExtension";
import ContentTypeLabel from "./model/ContentTypeLabel";
import Extension from "./model/Extension";
import File from "./model/File";
import FileLabel from "./model/FileLabel";
import FileTag from "./model/FileTag";
import Label from "./model/Label";
import Privacy from "./model/Privacy";
import Tab from "./model/Tab";
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
const content_type_label = new ContentTypeLabel(
  profileDataPath,
  "content_type_label"
);
const extensions = new Extension(profileDataPath, "extensions");
const files = new File(profileDataPath, "files");
const file_label = new FileLabel(profileDataPath, "file_label");
const file_tag = new FileTag(profileDataPath, "file_tag");
const labels = new Label(profileDataPath, "labels");
const privacies = new Privacy(profileDataPath, "privacies");
const tabs = new Tab(profileDataPath, "tabs");
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
  content_type_label,
  extensions,
  files,
  file_label,
  file_tag,
  labels,
  privacies,
  tabs,
  tags,
  user_preferences
};
