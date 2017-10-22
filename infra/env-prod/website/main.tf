provider "aws" {
  region  = "eu-central-1"
  version = "~> 1.1.0"
  profile = "vlad"
}

terraform {
  backend "s3" {
    acl     = "private"
    bucket  = "vladholubiev-tf-state"
    key     = "env-prod/website/main.tfstate"
    encrypt = "true"
    region  = "eu-central-1"
    profile = "vlad"
  }
}