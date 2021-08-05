# Which environment to run?
ENV=$1

# Swtich firebase projects
firebase use $ENV

# Config
SAVED_DATA_DIR="saved-data/"

# Run emulators
firebase emulators:start --export-on-exit=${SAVED_DATA_DIR} --import=${SAVED_DATA_DIR}
