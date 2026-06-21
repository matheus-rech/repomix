window.BENCHMARK_DATA = {
  "lastUpdate": 1782067990951,
  "repoUrl": "https://github.com/matheus-rech/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f04db0088ec00969436a0878bdae8f43176f9e11",
          "message": "Merge pull request #1631 from Samsen879/codex/fix-remote-split-output-copy\n\nfix(cli): copy split output files after remote packing",
          "timestamp": "2026-06-22T00:15:00+09:00",
          "tree_id": "912dc1acf2d96ef0ce452465fe8818ad2ab58688",
          "url": "https://github.com/matheus-rech/repomix/commit/f04db0088ec00969436a0878bdae8f43176f9e11"
        },
        "date": 1782067990621,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 576,
            "range": "±71",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 550ms, Q3: 621ms\nAll times: 504, 510, 516, 519, 519, 537, 539, 550, 551, 551, 561, 562, 569, 572, 574, 576, 576, 579, 585, 603, 604, 605, 621, 623, 637, 644, 656, 657, 679, 872ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 892,
            "range": "±19",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 885ms, Q3: 904ms\nAll times: 875, 880, 880, 883, 883, 885, 886, 886, 887, 890, 892, 896, 897, 899, 900, 904, 905, 911, 922, 939ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1161,
            "range": "±67",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1138ms, Q3: 1205ms\nAll times: 1116, 1120, 1121, 1127, 1133, 1138, 1140, 1145, 1153, 1155, 1161, 1164, 1165, 1191, 1191, 1205, 1213, 1224, 1231, 1238ms"
          }
        ]
      }
    ]
  }
}