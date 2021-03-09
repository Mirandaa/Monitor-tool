const data = {
  took: 1,
  timed_out: false,
  _shards: {
    total: 1,
    successful: 1,
    skipped: 0,
    failed: 0,
  },
  hits: {
    total: {
      value: 2247,
      relation: "eq",
    },
    max_score: null,
    hits: [],
  },
  aggregations: {
    2: {
      buckets: [
        {
          key_as_string: "2021-01-09",
          key: 1610121600000,
          doc_count: 214,
        },
        {
          key_as_string: "2021-01-10",
          key: 1610208000000,
          doc_count: 344,
        },
        {
          key_as_string: "2021-01-11",
          key: 1610294400000,
          doc_count: 309,
        },
        {
          key_as_string: "2021-01-12",
          key: 1610380800000,
          doc_count: 316,
        },
        {
          key_as_string: "2021-01-13",
          key: 1610467200000,
          doc_count: 303,
        },
        {
          key_as_string: "2021-01-14",
          key: 1610553600000,
          doc_count: 332,
        },
        {
          key_as_string: "2021-01-15",
          key: 1610640000000,
          doc_count: 335,
        },
        {
          key_as_string: "2021-01-16",
          key: 1610726400000,
          doc_count: 94,
        },
        {
          key_as_string: "2021-01-17",
          key: 1610726400000,
          doc_count: 194,
        },
        {
          key_as_string: "2021-01-18",
          key: 1610726400000,
          doc_count: 234,
        },
        {
          key_as_string: "2021-01-18",
          key: 1610726400000,
          doc_count: 164,
        },
        {
          key_as_string: "2021-01-19",
          key: 1610726400000,
          doc_count: 74,
        },
        {
          key_as_string: "2021-01-20",
          key: 1610726400000,
          doc_count: 304,
        },
      ],
    },
  },
};

export default data;
