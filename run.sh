docker run          \
--rm                \
-it                 \
-v $(pwd)/src:/app  \
-w /app             \
node:latest          \
/bin/bash