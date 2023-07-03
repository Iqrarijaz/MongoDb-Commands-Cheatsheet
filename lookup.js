 {
            $lookup: {
              from: "tableName",
              let: { $Id: "$Id" },
              pipeline: [
                {
                  $match: {
                    $expr: { $eq: ["$_id", { $toObjectId: "$$Id" }] },
                  },
                },
                {
                  $project: {
                    _id: 1,
                    Name: 1,
                  },
                },
              ],
              as: "Details",
            },
          },
