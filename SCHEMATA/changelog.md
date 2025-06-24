# Changelog - Schema

- From version 0.2.6 to 0.2.7. (2025-03-20):
  - Add to `sustainability_plan` the following categories: `project_website`, `GitHub`, `data_accessibility`, `webhosting`, `publications`, `publication_count`, `open_access_count`

- From version 0.2.5 to 0.2.6 (2025-01-09):
  - Rename `contacts` to `people`. Our database includes deceased people, and we want to name this entity in a way that includes them as well.

- From version 0.2.4 to 0.2.5 (2024-10-31):
  - Apply the differentiation between `ref` and `website` to the `research_data` and `stack` elements for consistency.

- From version 0.2.3 to 0.2.4 (2024-07-18):
  - The Boolean value `interviewed` has been added to the `research_data` section to indicate whether the interview regarding the technical details of a project has been conducted.

- From version 0.2.2 to 0.2.3 (2024-03-12):
  - A new data entry `category` added as a string with following possible values: `digital_preservation`, `tools_and_analysis`, `infrastructure`, `other`

- From version 0.2.1 to 0.2.2 (2023-12-14):
  - The Boolean value `maintained` has been added to the `project` section with the goal to differentiate between the founding periods and the actual lifespan of the projects.

- From version 0.2.0 to 0.2.1 (2023-09-30):
  - `contact.role` changed to an array of strings `contact.roles`. The new roles are aligned with the [CRediT](https://credit.niso.org/) taxonomy.

- From version 0.1.9 to 0.2.0 (2023-09-22):
  - `cooperation` added as a third category of `relation_type` in `related_institutions`.
  - `date.from` was changed from an optional to a required field.

- From version 0.1.8 to 0.1.9 (2023-03-07):
  - Simplification of the `research_data` element by merging `raw`, `refined`, and `final` sections into one key.
  - `host_institutions` replaced with `related_institutions` with `relation_type` as an additional key.
  - `relations` renamed to `related_entities`.

- From version 0.1.7 to 0.1.8 (2023-01-20):
  - `record_metadata` simplified by changing the object `record_modified` to a string `last_edited_on`.
  - `relations` element simplified by:
    - allowing only entries with a uuid
    - moving parent organizations to a new separate element `host_institutions`
    - removing all other entries without a uuid
  - `research_data` element simplified by changing the `access` object to a single number `open_access`.

- From version 0.1.6 to 0.1.7 (2023-01-13):
  - `topic_relations` (`dh`, `nls`, `meta`, `rdm`, `infrastructure`) were removed, since topic-related information is now covered by the `keywords` section.
  - `sustainability_plan` added as a boolean value to the `research_data` section.
  - `cooperation` added as a new relation type next to `sibling`, `child`, and `parent`.
